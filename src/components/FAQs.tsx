
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
  return (
    <section className="section" id="faqs">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-lg">Frequently asked questions</h2>
          </div>
          
          <div className="border rounded-xl bg-white dark:bg-gray-800/50 dark:border-gray-700 p-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b dark:border-gray-700">
                <AccordionTrigger className="hover:text-rosqin-blue dark:hover:text-rosqin-purple dark:text-white">
                  What is Rosqin?
                </AccordionTrigger>
                <AccordionContent className="dark:text-gray-300">
                  A new, innovative platform designed to transform education 
                  through powerful tools, built with input from the very people it serves.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border-b dark:border-gray-700">
                <AccordionTrigger className="hover:text-rosqin-blue dark:hover:text-rosqin-purple dark:text-white">
                  Why join Rosqin now?
                </AccordionTrigger>
                <AccordionContent className="dark:text-gray-300">
                  Get early access, exclusive perks, and the opportunity to help shape 
                  the platform and the world of education in entirety.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border-b dark:border-gray-700">
                <AccordionTrigger className="hover:text-rosqin-blue dark:hover:text-rosqin-purple dark:text-white">
                  Has Rosqin officially gone live yet?
                </AccordionTrigger>
                <AccordionContent className="dark:text-gray-300">
                  At this moment, we haven't launched yet. We are currently collaborating 
                  with our early supporters to gather valuable feedback and insights that 
                  will help us refine our product before the official release.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="border-b dark:border-gray-700">
                <AccordionTrigger className="hover:text-rosqin-blue dark:hover:text-rosqin-purple dark:text-white">
                  Who is eligible to join the waitlist?
                </AccordionTrigger>
                <AccordionContent className="dark:text-gray-300">
                  Anyone interested in revolutionizing education, whether you're a 
                  student, teacher, school, or an advocate for change.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="dark:border-gray-700">
                <AccordionTrigger className="hover:text-rosqin-blue dark:hover:text-rosqin-purple dark:text-white">
                  Is it completely free to sign up for the service?
                </AccordionTrigger>
                <AccordionContent className="dark:text-gray-300">
                  Yes, signing up for early access is completely free.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
