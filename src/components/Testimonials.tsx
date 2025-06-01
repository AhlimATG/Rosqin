
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="section bg-rosqin-very-light-blue dark:bg-gray-800">
      <div className="container">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <div className="inline-block text-sm font-medium text-rosqin-blue bg-rosqin-light-blue px-3 py-1 rounded-full mb-4 dark:text-rosqin-purple dark:bg-purple-200/20">
            TRUSTED BY EARLY ADOPTERS
          </div>
          
          <h2 className="heading-lg dark:text-white">Approved by students, teachers and admin</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-white dark:bg-gray-800/50 dark:border-gray-700">
            <CardContent className="pt-6">
              <div className="flex text-yellow-400 mb-4">
                <Star className="fill-yellow-400" size={20} />
                <Star className="fill-yellow-400" size={20} />
                <Star className="fill-yellow-400" size={20} />
                <Star className="fill-yellow-400" size={20} />
                <Star className="text-gray-300 dark:text-gray-600" size={20} />
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                "I've never been more excited about education! Finally, something that feels built for us."
              </p>
            </CardContent>
            <CardFooter className="border-t border-gray-100 dark:border-gray-700 pt-4">
              <div>
                <p className="font-semibold dark:text-white">Aisha Lawal</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Second-year student</p>
              </div>
            </CardFooter>
          </Card>

          <Card className="bg-white dark:bg-gray-800/50 dark:border-gray-700">
            <CardContent className="pt-6">
              <div className="flex text-yellow-400 mb-4">
                <Star className="fill-yellow-400" size={20} />
                <Star className="fill-yellow-400" size={20} />
                <Star className="fill-yellow-400" size={20} />
                <Star className="fill-yellow-400" size={20} />
                <Star className="fill-yellow-400" size={20} />
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                "The preview showed we need better tools. This will help focus on students."
              </p>
            </CardContent>
            <CardFooter className="border-t border-gray-100 dark:border-gray-700 pt-4">
              <div>
                <p className="font-semibold dark:text-white">Mr. Okafor</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Secondary School Teacher</p>
              </div>
            </CardFooter>
          </Card>

          <Card className="bg-white dark:bg-gray-800/50 dark:border-gray-700">
            <CardContent className="pt-6">
              <div className="flex text-yellow-400 mb-4">
                <Star className="fill-yellow-400" size={20} />
                <Star className="fill-yellow-400" size={20} />
                <Star className="fill-yellow-400" size={20} />
                <Star className="fill-yellow-400" size={20} />
                <Star className="fill-yellow-400" size={20} />
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                "Finally a system that simplifies administration and student tracking. It's perfect."
              </p>
            </CardContent>
            <CardFooter className="border-t border-gray-100 dark:border-gray-700 pt-4">
              <div>
                <p className="font-semibold dark:text-white">Dr. Mrs. Daniella</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">School Administrator</p>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
