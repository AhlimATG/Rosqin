
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // Added import for Input
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(""); // Added state for email input

  const handleNextClick = () => {
    // Here you could potentially pass the email to the signup page
    // For now, it just navigates
    navigate("/signup");
  };

  return (
    <section id="hero-waitlist-form" className="section bg-gradient-to-b from-white to-rosqin-very-light-blue dark:from-gray-800 dark:to-gray-900">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="heading-xl mb-6 dark:text-white">
            Join the revolution in education
            <span className="block text-rosqin-blue dark:text-rosqin-purple">
              limited early spots available!
            </span>
          </h1>
          <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
            Get early access to
            <br />a smarter way to learn
          </p>

          {/* Updated to include email input and new button */}
          <div className="max-w-md mx-auto space-y-4">
            <Input
              type="email"
              placeholder="Personal email or school email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full text-base dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
            <Button
              onClick={handleNextClick}
              className="w-full bg-rosqin-blue hover:bg-blue-600 dark:bg-rosqin-purple dark:hover:bg-purple-700 py-3 text-lg" // Adjusted padding
              size="lg"
            >
              Next →
            </Button>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center">
              NO SPAM, JUST EARLY ACCESS WHEN READY
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
