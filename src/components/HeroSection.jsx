import { ArrowBigDown } from "lucide-react";
import React from "react";

export const HeroSection = () => {
  return (
    <section
      id="Hero"
      className=" relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className=" space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-o animate-fade-in">Hi, I'm </span>
            <span className="text-gradient opacity-0 animate-fade-in-delay-1">
              Omotore
            </span>
            <span className="text-primary opacity-0 ml-2 animate-fade-in-delay-2">
              {" "}
              Oluwatosin
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            A Full stack web developer passionate about building responsive and
            scalable applications with React, Node.js, and Tailwind CSS. I enjoy
            turning ideas into clean, beautiful, and functional solutions that
            make a real impact
          </p>
          <div className="opacity-0 animate-fade-in-delay-4 pt-4">
            <a href="#projects" className="cosmic-button">
              View my work
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        {" "}
        <span className=" text-sm text-muted-foreground mb-2"> Scroll</span>
        <ArrowBigDown className=" h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
