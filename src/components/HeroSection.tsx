"use client";
import { motion } from "framer-motion";
import { ArrowRight, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CALENDLY_URL } from "@/lib/constants";
import { CodeTerminal } from "@/components/CodeTerminal";

const stats = [
  { value: "50+", label: "MVPs Launched" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "12+", label: "Countries Served" },
  { value: "2x", label: "Faster Time-to-Market" },
];

export const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center pt-20 pb-32 px-6 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background gradient with glow effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f1a] to-[#0a0a0a]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3b82f6]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#3b82f6]/20 rounded-full blur-3xl"></div>
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
      </div>

      <div className="relative z-10 container mx-auto max-w-5xl text-center">
        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-6 px-4"
        >
          <div className="flex items-center gap-2 px-3 py-1.5 bg-[#3b82f6]/10 border border-[#3b82f6]/20 rounded-full">
            <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#3b82f6]" />
            <span className="text-xs text-[#3b82f6] font-mono">Senior Engineers</span>
          </div>
          <span className="hidden sm:inline text-sm text-gray-500">•</span>
          <span className="text-xs sm:text-sm text-gray-400 font-medium text-center">Top MNCs & Silicon Valley</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 leading-tight tracking-tight "
        >
          <span className="text-white">From </span>
          <span className="text-[#3b82f6] bg-clip-text text-transparent bg-gradient-to-r from-[#3b82f6] to-[#60a5fa]">Idea</span>
          <span className="text-white"> to </span>
          <span className="text-[#3b82f6] bg-clip-text text-transparent bg-gradient-to-r from-[#3b82f6] to-[#60a5fa]">Launch</span>
          <br />
          <span className="text-white">We Build & Scale</span>
          <br />
          <span className="text-white font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl">MVPs</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4"
        >
          Enterprise-grade engineering meets startup speed. We transform your vision into market-ready products with custom software, AI solutions, and growth strategies—all from a team that&apos;s shipped products at scale.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Button 
            size="lg" 
            className="bg-[#3b82f6] hover:bg-[#2563eb] text-white px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base w-full sm:w-auto"
            asChild
          >
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              Start Your Project
              <ArrowRight className="ml-2" />
            </a>
          </Button>
          {/* <Button size="lg" variant="outline" className="border-gray-700 text-white hover:bg-gray-800 px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base w-full sm:w-auto" asChild>
            <a href="/portfolio">
              View Our Work
            </a>
          </Button> */}
        </motion.div>

        {/* Code Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-12 sm:mb-16 px-4"
        >
          <CodeTerminal />
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-4 sm:p-6 bg-[#111111]/50 border border-gray-800/50 rounded-xl backdrop-blur-sm hover:border-[#3b82f6]/30 transition-all"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 font-mono">{stat.value}</div>
              <div className="text-xs sm:text-sm text-gray-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
