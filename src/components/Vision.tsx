import React from "react";
import { schoolBuildingImage } from "../images";

const Vision = () => {
  return (
    <section className="section" id="our-vision">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-block text-sm font-medium text-rosqin-blue dark:text-rosqin-purple bg-rosqin-light-blue dark:bg-gray-800 px-3 py-1 rounded-full mb-4">
              ROSQIN'S VISION
            </div>

            <h2 className="heading-lg mb-8 dark:text-white">
              Shaping tomorrow's classrooms, today
            </h2>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Rosqin is not just a platform — it's a movement to rebuild the
              soul of education.
            </p>

            <div className="space-y-6 text-gray-600 dark:text-gray-400">
              <p>
                We're designing a future where schools don't just manage — they
                inspire. Where teachers don't just teach — they lead with
                purpose. Where students don't just attend — they belong, grow,
                and thrive.
              </p>

              <p className="font-medium text-gray-800 dark:text-gray-200">
                This isn't just software.
                <br />
                It is the new heartbeat of education.
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <img
              src={schoolBuildingImage}
              alt=""
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
