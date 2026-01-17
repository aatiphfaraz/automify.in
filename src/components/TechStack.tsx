"use client";
import { motion } from "framer-motion";

const techStack = [
  "TypeScript", "React", "Next.js", "Node.js",
  "Python", "AWS", "Docker", "Kubernetes",
  "PostgreSQL", "MongoDB", "Redis", "GraphQL",
  "TensorFlow", "OpenAI", "LangChain", "Vercel"
];

// Duplicate array multiple times for seamless infinite scroll
const duplicatedTechStack = [...techStack, ...techStack, ...techStack];

export const TechStack = () => {
  return (
    <div className="relative py-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]"></div>
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 sm:gap-6 md:gap-8 py-4 overflow-hidden"
        >
          <motion.div
            className="flex items-center gap-4 sm:gap-6 md:gap-8"
            animate={{
              x: ["0%", "-33.333%"], // Move by one-third (since we have 3 copies)
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {duplicatedTechStack.map((tech, index) => (
              <div
                key={`${tech}-${index}`}
                className="flex-shrink-0 px-4 sm:px-6 py-2 sm:py-3 bg-[#111111] border border-gray-800 rounded-lg hover:border-[#3b82f6]/50 transition-all"
              >
                <span className="text-xs sm:text-sm font-mono text-gray-300 whitespace-nowrap">{tech}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
