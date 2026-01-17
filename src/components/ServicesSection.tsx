"use client";
import { motion } from "framer-motion";
import { Code, Smartphone, Bot, Settings, Globe, Rocket, TrendingUp, Search, Megaphone, Target, UserPlus, BarChart } from "lucide-react";

const developmentServices = [
  {
    icon: Code,
    title: "Web Applications",
    description: "Scalable, performant web apps built with modern tech stacks.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform apps for iOS and Android.",
  },
  {
    icon: Bot,
    title: "AI Agents & Automation",
    description: "Intelligent agents and workflow automation that work 24/7.",
  },
  {
    icon: Settings,
    title: "Business Digitization",
    description: "Transform offline operations into streamlined digital workflows.",
  },
  {
    icon: Globe,
    title: "Custom Websites",
    description: "High-converting marketing sites and landing pages.",
  },
  {
    icon: Rocket,
    title: "MVP Development",
    description: "Rapid prototyping to validate your ideas in weeks, not months.",
  },
];

const launchServices = [
  {
    icon: TrendingUp,
    title: "Growth Strategy",
    description: "Data-driven strategies to acquire and retain customers.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Rank higher and drive organic traffic to your product.",
  },
  {
    icon: Megaphone,
    title: "Paid Advertising",
    description: "High-ROI campaigns across Google, Meta, and LinkedIn.",
  },
  {
    icon: Target,
    title: "Conversion Optimization",
    description: "Turn visitors into customers with optimized funnels.",
  },
  {
    icon: UserPlus,
    title: "Lead Generation",
    description: "Qualified leads delivered directly to your sales team.",
  },
  {
    icon: BarChart,
    title: "Analytics & Insights",
    description: "Track every metric that matters for your growth.",
  },
];

const ServiceCard = ({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) => (
  <motion.div
    whileHover={{ y: -6, scale: 1.02 }}
    className="group bg-[#111111] border border-gray-800 rounded-xl p-4 sm:p-6 hover:border-[#3b82f6]/50 transition-all backdrop-blur-sm relative overflow-hidden"
  >
    {/* Hover glow effect */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
    
    <div className="relative z-10">
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#3b82f6]/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-[#3b82f6]/20 transition-all border border-[#3b82f6]/20">
        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#3b82f6]" />
      </div>
      <h3 className="text-white font-bold text-base sm:text-lg mb-2 sm:mb-3 group-hover:text-[#3b82f6] transition-colors">{title}</h3>
      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

export const ServicesSection = () => {
  return (
    <section id="services" className="py-32 px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-[#0f0f1a]">
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#3b82f6]/20 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20 "
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#3b82f6]/10 border border-[#3b82f6]/20 rounded-full mb-6">
            <span className="text-xs text-[#3b82f6] font-mono uppercase tracking-wider">Full-Stack Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight ">
            End-to-End Solutions for{" "}
            <span className="text-[#3b82f6] bg-clip-text text-transparent bg-gradient-to-r from-[#3b82f6] to-[#60a5fa]">Your Success</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed px-4">
            Two powerful service streams working together to take your idea from concept to customer acquisition.
          </p>
        </motion.div>

        {/* Development Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-10 px-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-[#3b82f6]/10 border border-[#3b82f6]/20 flex items-center justify-center flex-shrink-0">
              <span className="text-xl sm:text-2xl font-bold text-[#3b82f6] font-mono">01</span>
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Development</h3>
              <p className="text-sm sm:text-base text-gray-400 font-medium">Build your product right</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {developmentServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </motion.div>

        {/* Launch & Grow Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-10 px-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-[#3b82f6]/10 border border-[#3b82f6]/20 flex items-center justify-center flex-shrink-0">
              <span className="text-xl sm:text-2xl font-bold text-[#3b82f6] font-mono">02</span>
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Launch & Grow</h3>
              <p className="text-sm sm:text-base text-gray-400 font-medium">Get your product to market</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {launchServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
