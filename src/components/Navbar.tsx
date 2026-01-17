"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CALENDLY_URL } from "@/lib/constants";

const navLinks = [
  { name: "Services", href: "#services" },
  // { name: "Portfolio", href: "/portfolio" },
  { name: "Process", href: "#process" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-2" aria-label="automify.in Home">
          <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center flex-shrink-0">
            <Image
              src="/logo.png"
              alt="automify.in logo"
              width={60}
              height={60}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <span className="text-xl font-bold text-white">automify.in</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
              aria-label={`Navigate to ${link.name} section`}
            >
              {link.name}
            </a>
          ))}
          <Button 
            size="sm" 
            className="ml-4"
            asChild
          >
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              Get Started
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
        >
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium py-2"
              >
                {link.name}
              </a>
            ))}
            <Button 
              size="sm" 
              className="w-full mt-2"
              asChild
            >
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                Get Started
              </a>
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};
