"use client";
import { motion } from "framer-motion";
import { Check, Code2, Cpu } from "lucide-react";

const benefits = [
  "Engineers from Top MNCs, Amazon & Sillicon Valley Startups",
  "50+ MVPs successfully launched",
  "Full-stack expertise across web, mobile, and AI",
  "Agile methodology with 2-week sprint cycles",
  "Dedicated project manager for every client",
  "Post-launch support and maintenance included",
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative overflow-hidden">
      <div className="relative z-10 container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Code2 className="w-6 h-6 text-[#3b82f6]" />
                <span className="text-sm text-[#3b82f6] font-mono uppercase tracking-wider">Engineering Excellence</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                Built by Engineers Who&apos;ve{" "}
                <span className="text-[#3b82f6] bg-clip-text text-transparent bg-gradient-to-r from-[#3b82f6] to-[#60a5fa]">Shipped at Scale</span>
              </h2>
            </div>
            <p className="text-base sm:text-lg text-gray-300 mb-8 sm:mb-10 leading-relaxed">
              We&apos;re not just another dev shop. Our team consists of <span className="text-white font-semibold">senior engineers</span> who&apos;ve built products used by <span className="text-[#3b82f6] font-semibold">billions</span>. We bring that <span className="text-white font-semibold">enterprise-grade expertise</span> to your startup, helping you avoid common pitfalls and ship faster.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-[#3b82f6]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-[#3b82f6]" />
                  </div>
                  <span className="text-gray-300">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-[#111111] border border-gray-800 rounded-2xl p-6 sm:p-8 relative overflow-hidden backdrop-blur-sm">
              {/* Glow effect */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#3b82f6]/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#3b82f6]/10 rounded-full blur-3xl"></div>
              
              {/* Grid pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-10"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <Cpu className="w-5 h-5 text-[#3b82f6]" />
                  <h3 className="text-xl font-bold text-white">
                    Our Engineers Come From
                  </h3>
                </div>
                <p className="text-sm text-gray-400 mb-8 font-mono">World-class product experience</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="px-4 py-2.5 bg-gray-800/50 border border-gray-700 rounded-lg hover:border-[#3b82f6]/50 transition-all">
                      <span className="text-white font-semibold">Amazon</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="px-4 py-2.5 bg-[#3b82f6]/10 border border-[#3b82f6]/30 rounded-lg hover:bg-[#3b82f6]/20 transition-all">
                      <span className="text-[#3b82f6] font-semibold">Silicon Valley Startups</span>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-gray-800">
                  <div className="flex items-baseline gap-2 mb-2">
                    <div className="text-4xl sm:text-5xl font-bold text-white font-mono">10+</div>
                    <span className="text-lg sm:text-xl text-gray-400">Years</span>
                  </div>
                  <div className="text-sm text-gray-500">Average industry experience per engineer</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
