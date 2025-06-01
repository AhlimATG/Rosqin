
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/signup");
    setMobileMenuOpen(false); // Close mobile menu if open
  };

  return (
    <header className="py-4 border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 sticky top-0 z-50">
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-rosqin-blue dark:bg-rosqin-purple rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">R</div>
            <span className="text-lg font-semibold dark:text-white">Rosqin</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/#our-vision" className="text-gray-600 hover:text-rosqin-blue dark:text-gray-300 dark:hover:text-rosqin-purple transition-colors">Our Vision</a>
          <a href="/#about" className="text-gray-600 hover:text-rosqin-blue dark:text-gray-300 dark:hover:text-rosqin-purple transition-colors">About</a>
          <a href="/#features" className="text-gray-600 hover:text-rosqin-blue dark:text-gray-300 dark:hover:text-rosqin-purple transition-colors">Features</a>
          <a href="/#contact" className="text-gray-600 hover:text-rosqin-blue dark:text-gray-300 dark:hover:text-rosqin-purple transition-colors">Contact us</a>
          <a href="/#faqs" className="text-gray-600 hover:text-rosqin-blue dark:text-gray-300 dark:hover:text-rosqin-purple transition-colors">FAQs</a>
          <ThemeToggle />
          <Button 
            onClick={handleSignUpClick} 
            className="bg-rosqin-blue hover:bg-blue-600 dark:bg-rosqin-purple dark:hover:bg-purple-700"
          >
            Sign Up
          </Button>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="dark:text-gray-300 dark:hover:bg-gray-700"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[60px] left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-lg z-50">
          <div className="container py-4 flex flex-col space-y-4">
            <a href="/#our-vision" className="text-gray-600 dark:text-gray-300 hover:text-rosqin-blue dark:hover:text-rosqin-purple transition-colors" onClick={() => setMobileMenuOpen(false)}>Our Vision</a>
            <a href="/#about" className="text-gray-600 dark:text-gray-300 hover:text-rosqin-blue dark:hover:text-rosqin-purple transition-colors" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="/#features" className="text-gray-600 dark:text-gray-300 hover:text-rosqin-blue dark:hover:text-rosqin-purple transition-colors" onClick={() => setMobileMenuOpen(false)}>Features</a>
            <a href="/#contact" className="text-gray-600 dark:text-gray-300 hover:text-rosqin-blue dark:hover:text-rosqin-purple transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact us</a>
            <a href="/#faqs" className="text-gray-600 dark:text-gray-300 hover:text-rosqin-blue dark:hover:text-rosqin-purple transition-colors" onClick={() => setMobileMenuOpen(false)}>FAQs</a>
            <Button 
              onClick={handleSignUpClick} 
              className="bg-rosqin-blue hover:bg-blue-600 dark:bg-rosqin-purple dark:hover:bg-purple-700 w-full"
            >
              Sign Up
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
