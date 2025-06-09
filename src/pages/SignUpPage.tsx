
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { db, auth } from "@/lib/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

const signUpSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  countryCode: z.string()
    .min(2, { message: "Country code required (e.g., +1)." })
    .regex(/^\+\d{1,3}$/, { message: "Invalid country code format (e.g., +1, +44)." }),
  phoneNumber: z.string()
    .min(7, { message: "Phone number must be at least 7 digits." })
    .regex(/^\d+$/, { message: "Phone number must contain only digits." }),
  email: z.string().email({ message: "Invalid email address." }),
});

type SignUpFormValues = z.infer<typeof signUpSchema>;

const SignUpPage = () => {
  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      fullName: "",
      countryCode: "",
      phoneNumber: "",
      email: "",
    },
  });

  const onSubmit = async (data: SignUpFormValues) => {
    const fullPhoneNumber = `${data.countryCode}${data.phoneNumber}`;
    try {
      // Add user to Firestore 'users' collection
      const userDocRef = await addDoc(collection(db, "users"), {
        fullName: data.fullName,
        email: data.email,
        countryCode: data.countryCode,
        phoneNumber: data.phoneNumber,
        fullPhoneNumber: fullPhoneNumber, // Store combined number
        createdAt: serverTimestamp(),
        source: "sign_up_page",
      });
      console.log("User added to 'users' collection with ID: ", userDocRef.id);

      // Add to 'waitlist' collection as well
      const waitlistDocRef = await addDoc(collection(db, "waitlist"), {
        name: data.fullName,
        email: data.email,
        countryCode: data.countryCode,
        phoneNumber: data.phoneNumber,
        fullPhoneNumber: fullPhoneNumber,
        timestamp: serverTimestamp(),
        status: "registered_signup_page", // Differentiate source
        source: "sign_up_page"
      });
      console.log("User added to 'waitlist' collection with ID: ", waitlistDocRef.id);
      
      // Create authentication user
      try {
        // Use a temporary password based on timestamp; user will likely reset this later
        const userCredential = await createUserWithEmailAndPassword(auth, data.email, `temp_${Date.now()}`);
        console.log("Firebase auth user created: ", userCredential.user.uid);
        toast({
          title: "Sign Up Successful!",
          description: "Thank you for creating an account. You've been added to our waitlist.",
        });
      } catch (authError: any) {
        console.error("Firebase auth user creation error: ", authError);
        if (authError.code === 'auth/email-already-in-use') {
          toast({
            title: "Account Exists or Pending",
            description: "This email is already registered or on our waitlist. We'll be in touch!",
            variant: "default", 
          });
        } else {
          toast({
            title: "Authentication Issue",
            description: `Could not set up auth: ${authError.message}. You are on the waitlist.`,
            variant: "destructive",
          });
        }
      }
      
      form.reset();
    } catch (error: any) {
      console.error("Sign up page - Firestore error:", error);
      toast({
        title: "Submission Error",
        description: `There was a problem saving your details: ${error.message || "Please try again."}`,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="flex-grow container py-12 md:py-20">
        <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-8 md:p-10 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700">
          <h1 className="text-3xl font-bold text-center mb-2 text-gray-900 dark:text-white">Create Account</h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8">Join us and start your journey.</p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 dark:text-gray-300">Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} className="dark:bg-gray-700 dark:text-white dark:placeholder-gray-400" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="countryCode"
                  render={({ field }) => (
                    <FormItem className="col-span-1">
                      <FormLabel className="text-gray-700 dark:text-gray-300">Code</FormLabel>
                      <FormControl>
                        <Input placeholder="+1" {...field} className="dark:bg-gray-700 dark:text-white dark:placeholder-gray-400" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem className="col-span-2">
                      <FormLabel className="text-gray-700 dark:text-gray-300">Phone Number</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="Enter phone number" {...field} className="dark:bg-gray-700 dark:text-white dark:placeholder-gray-400" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 dark:text-gray-300">Personal Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Enter your personal email" {...field} className="dark:bg-gray-700 dark:text-white dark:placeholder-gray-400" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-rosqin-blue hover:bg-blue-600 dark:bg-rosqin-purple dark:hover:bg-purple-700" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? "Signing Up..." : "Sign Up & Join Waitlist"}
              </Button>
            </form>
          </Form>
           <p className="text-xs text-gray-500 dark:text-gray-400 mt-6 text-center">
            By signing up, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignUpPage;

