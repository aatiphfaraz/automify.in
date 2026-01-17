"use client";
import { Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

const services = [
  "Web Development",
  "Mobile Apps",
  "AI & Automation",
  "MVP Development",
];

const company = [
  "About Us",
  "Our Process",
  "Careers",
  "Blog",
];

const legal = [
  "Privacy Policy",
  "Terms of Service",
  "Cookie Policy",
];

export const Footer = () => {
  return (
    <footer className="border-t border-gray-800 bg-[#0a0a0a] py-16 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Left Column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="automify.in logo"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold text-white">automify.in</span>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              From idea to launch, we build and scale digital products for startups and small businesses.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://linkedin.com/company/automify" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit automify.in on LinkedIn"
                className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-gray-400" aria-hidden="true" />
              </a>
             
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {legal.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 automify.in. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>Built with ❤️ for startups that move fast</span>
        
          </div>
        </div>
      </div>
    </footer>
  );
};
