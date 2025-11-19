import { Briefcase, Code, User } from "lucide-react";

export const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Passoniate Web Developer</h3>
            <p className="text-muted-foreground text-left">
              I am a web developer skilled in React, Node.js, and Tailwind CSS,
              with a passion for building responsive and scalable applications.
              I specialize in turning ideas into clean, user-friendly solutions
              that deliver performance and impact
            </p>
            <p className="text-muted-foreground text-left ">
              Currently, I am focused on advancing as a full-stack developer,
              contributing to innovative projects, and collaborating with
              forward-thinking teams. I bring a blend of technical proficiency,
              creativity, and adaptability, making me well-suited for roles
              where building impactful and reliable software is the priority
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>
              <a
                href="/Omotore Oluwatosin Mary.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className=" px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                {" "}
                Download Cv
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 ">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg ">Web Development</h4>
                  <p className=" text-muted-foreground">
                    Creating responsive applications with modern tools and a
                    problem-solving mindset.
                  </p>
                </div>
              </div>
            </div>{" "}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg ">UI/UX Design</h4>
                  <p className=" text-muted-foreground">
                    I’m a web developer focused on building responsive,
                    user-friendly applications with clean and intuitive UI/UX
                    design
                  </p>
                </div>
              </div>
            </div>{" "}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold md:text-lg ">
                    Project Management
                  </h4>
                  <p className=" text-muted-foreground">
                    I’m skilled at managing projects from planning to
                    deployment, ensuring timely delivery and quality results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
