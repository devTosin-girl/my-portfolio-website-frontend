import React, { useEffect, useState } from "react";
import { X, Menu } from "lucide-react";
import { cn } from "../lib/utils";

const navItems = [
  { name: "Home", href: "#Hero" },
  { name: "About", href: "#about" },
  { name: "Skill", href: "#Skill" },
  { name: "Project", href: "#Project" },
  { name: "Contact", href: "#contact" },
];
export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMeunOpen, setIsMeunOpen] = useState(false);

  useEffect(() => {
    const handleSroll = () => {
      setIsScrolled(window.screenY > 10);
    };
    window.addEventListener("scroll", handleSroll);
    return () => window.removeEventListener("scroll", handleSroll);
  }, []);
  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300  ",
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-md  shadow-xs"
          : "py-5 "
      )}
    >
      <div className=" container flex items-center justify-between md:px-30 ">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#Hero"
        >
          <span className=" relative z-10  ">
            <span className="text-glow text-foreground"> ⚡devTosin</span>{" "}
            Portfolio
          </span>
        </a>
        {/* desktop nav */}

        <div className="hidden md:flex gap-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
        {/* mobile nav */}
        <button
          onClick={() => setIsMeunOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMeunOpen ? " Close Menu" : "Open menu"}
        >
          {isMeunOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden ",
            isMeunOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col gap-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300"
                onClick={() => setIsMeunOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
