
import React from "react";
import { userRolesCompositeImage } from "../images"; // Import the new composite image

const UserRoles = () => {
  const roles = [
    {
      title: "Student",
      description: "Learn, connect, and grow in a space made just for your success.",
    },
    {
      title: "Teacher",
      description: "Collaborate, manage classes, and inspire students with smart tools.",
    },
    {
      title: "Admin",
      description: "Manage, lead, and create thriving learning environments with Rosqin.",
    },
  ];

  return (
    <section
      className="section bg-rosqin-very-light-blue dark:bg-gray-900"
      id="user-roles"
    >
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-block text-sm font-medium text-rosqin-blue bg-rosqin-light-blue dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full mb-4">
            FOR STUDENTS, TEACHERS & ADMINS
          </div>
          <h2 className="heading-lg dark:text-white mb-8">
            Designed for all areas of education.
          </h2>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <img
            src={userRolesCompositeImage}
            alt="Students, Teachers, and Admins using Rosqin"
            className="rounded-lg shadow-xl mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {roles.map((role) => (
            <div key={role.title} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-3 text-rosqin-blue dark:text-rosqin-purple">{role.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {role.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserRoles;

