import React from "react";
import HeroSection from "../components/HeroSection";
import ThemeToggle from "../components/ThemeToggle";
import StarBackground from "../components/StarBackground";
import Navbar from "../components/Navbar";
import AboutMe from "../components/Aboutme";
import Skills from "../components/skills";
import Project from "../components/Project";
import ContactSection from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* {theme toggle} */}
      <ThemeToggle />
      {/* {background effect} */}
      <StarBackground />
      {/* {navbar} */}
      <Navbar />
      {/* {main content} */}

      <main>
        <HeroSection />
        <AboutMe />
        <Skills />
        <Project />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
