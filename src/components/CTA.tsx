
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();

  const handleJoinWaitlistClick = () => {
    navigate("/signup");
  };

  return (
    <section className="section bg-rosqin-very-light-blue dark:bg-gray-800">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center bg-rosqin-light-blue dark:bg-gray-700 p-12 md:p-16 rounded-2xl">
          <h2 className="heading-lg mb-6 dark:text-white">
            Ready to be part<br />
            of the future of education?
          </h2>
          
          <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-lg mx-auto">
            Join thousands already rethinking how schools connect, grow, and thrive — from day one.
          </p>
          
          <Button 
            onClick={handleJoinWaitlistClick}
            className="bg-rosqin-blue hover:bg-blue-600 dark:bg-rosqin-purple dark:hover:bg-purple-600 px-8 py-6 h-auto text-lg"
          >
            Join Waitlist
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
