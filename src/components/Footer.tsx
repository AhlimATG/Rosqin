import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  // Removed scrollToHero function as it's no longer needed

  return (
    <footer className="bg-rosqin-very-light-blue dark:bg-gray-800 py-16" id="contact">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-semibold text-lg mb-4 dark:text-white">Ready to be part of something big?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Get early access to a smarter way to learn</p>
            {/* Updated link to use React Router's Link component and navigate to /signup */}
            <Link
              to="/signup"
              className="inline-flex items-center justify-center px-4 py-2 bg-rosqin-blue hover:bg-blue-600 text-white rounded-md transition-colors dark:bg-rosqin-purple dark:hover:bg-purple-700 mb-6"
            >
              Join Waitlist
            </Link>
            
            <div className="flex gap-4">
              <a href="https://www.facebook.com/share/1LcTLhhYvT/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-rosqin-blue dark:hover:text-rosqin-purple transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/rosqinofficial?igsh=MWN4cTcxbzEzcTV6dg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-rosqin-blue dark:hover:text-rosqin-purple transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://x.com/rosqinofficial?s=11" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-rosqin-blue dark:hover:text-rosqin-purple transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 dark:text-white">Navigations</h3>
            <ul className="space-y-3">
              <li><a href="/#our-vision" className="text-gray-600 dark:text-gray-300 hover:text-rosqin-blue dark:hover:text-rosqin-purple transition-colors">Rosqin's vision</a></li>
              <li><a href="/#features" className="text-gray-600 dark:text-gray-300 hover:text-rosqin-blue dark:hover:text-rosqin-purple transition-colors">Our features</a></li>
              <li><a href="/#testimonials" className="text-gray-600 dark:text-gray-300 hover:text-rosqin-blue dark:hover:text-rosqin-purple transition-colors">Testimonials</a></li>
              <li><a href="/#user-roles" className="text-gray-600 dark:text-gray-300 hover:text-rosqin-blue dark:hover:text-rosqin-purple transition-colors">User groups</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 dark:text-white">Contact us</h3>
            <ul className="space-y-3">
              {/* Removed phone number list item */}
              <li className="text-gray-600 dark:text-gray-300">✉️ hello@rosqin.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="bg-rosqin-blue dark:bg-rosqin-purple rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">R</div>
            <span className="text-lg font-semibold dark:text-white">Rosqin</span>
          </div>
          
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2025 Rosqin All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
