import React from "react";
import { MessageSquare, LayoutDashboard, BookOpen, ShieldCheck } from "lucide-react";
import { teacherFeatureImage } from "../images";

const Features = () => {
  return (
    <section className="section dark:bg-gray-900" id="features">
      <div className="container">
        <div className="max-w-3xl mx-auto mb-12">
          <div className="inline-block text-sm font-medium text-rosqin-blue bg-rosqin-light-blue dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full mb-4">
            OUR FEATURES
          </div>
          
          <h2 className="heading-lg mb-10 dark:text-white">Key features that set Rosqin apart</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="shrink-0">
                  <div className="h-12 w-12 rounded-full bg-rosqin-light-blue dark:bg-blue-900 flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 text-rosqin-blue dark:text-blue-200" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">Collaborative community</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Built-in forums and social features to support learning and peer connection.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="shrink-0">
                  <div className="h-12 w-12 rounded-full bg-rosqin-light-blue dark:bg-blue-900 flex items-center justify-center">
                    <LayoutDashboard className="h-6 w-6 text-rosqin-blue dark:text-blue-200" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">Personalized dashboards</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Tailored views for students, teachers, and admins—see only what matters to you.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="shrink-0">
                  <div className="h-12 w-12 rounded-full bg-rosqin-light-blue dark:bg-blue-900 flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-rosqin-blue dark:text-blue-200" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">Smart academic tools</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Access assignments, schedules, grading tools, and performance insights in one place.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="shrink-0">
                  <div className="h-12 w-12 rounded-full bg-rosqin-light-blue dark:bg-blue-900 flex items-center justify-center">
                    <ShieldCheck className="h-6 w-6 text-rosqin-blue dark:text-blue-200" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">Secure & role-based access</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Only the right people access the right data, keeping sensitive information confidential.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <img 
              src={teacherFeatureImage}
              alt="Teacher using Rosqin platform" 
              className="rounded-lg shadow-lg mx-auto object-cover"
              width={500} 
              height={500}
            />
            <div className="absolute top-4 right-4 bg-rosqin-blue text-white rounded-full px-4 py-1 text-sm font-medium">
              Intuitive Design
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
