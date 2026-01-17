"use client";
import { motion } from "framer-motion";
import { MessageCircle, Lightbulb, Code2, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Discovery Call",
    description: "We dive deep into your vision, target market, and business goals.",
  },
  {
    icon: Lightbulb,
    title: "Strategy & Planning",
    description: "Our team crafts a roadmap with milestones and clear deliverables.",
  },
  {
    icon: Code2,
    title: "Rapid Development",
    description: "Agile sprints deliver working features every 1-2 weeks.",
  },
  {
    icon: Rocket,
    title: "Launch & Deploy",
    description: "Go live with full support, monitoring, and optimization.",
  },
  {
    icon: TrendingUp,
    title: "Scale & Grow",
    description: "Marketing, SEO, and ads to acquire customers at scale.",
  },
];

export const ProcessSection = () => {
  return (
    <section id="process" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative overflow-hidden">
      <div className="relative z-10 container mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 "
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            From Idea to <span className="text-[#3b82f6]">Revenue</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-4">
            A proven 5-step process that has helped 50+ startups launch and scale their products.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#3b82f6]/10 flex items-center justify-center mx-auto mb-3 sm:mb-4 border border-[#3b82f6]/20">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#3b82f6]" />
                </div>
                <h3 className="text-white font-semibold text-base sm:text-lg mb-2">{step.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
