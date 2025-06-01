
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import UserRoles from "@/components/UserRoles";
import Vision from "@/components/Vision";
import WhyJoin from "@/components/WhyJoin";
import Testimonials from "@/components/Testimonials";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <UserRoles />
        <Vision />
        <WhyJoin />
        <Testimonials />
        <Features />
        <CTA />
        <FAQs />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
