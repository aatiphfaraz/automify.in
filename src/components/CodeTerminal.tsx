"use client";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const codeLines = [
  { text: "$ npm create automify-app", delay: 0 },
  { text: "✓ Building your MVP...", delay: 0.5 },
  { text: "✓ Deploying to production...", delay: 1 },
  { text: "✓ Scaling infrastructure...", delay: 1.5 },
  { text: "✨ Launched successfully!", delay: 2 },
];

export const CodeTerminal = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="bg-[#0a0a0a] border border-gray-800 rounded-lg overflow-hidden shadow-2xl">
        {/* Terminal header */}
        <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-[#1a1a1a] border-b border-gray-800">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
          </div>
          <div className="flex items-center gap-2 ml-4">
            <Terminal className="w-4 h-4 text-gray-500" />
            <span className="text-xs text-gray-500 font-mono">terminal</span>
          </div>
        </div>
        
        {/* Terminal content */}
        <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm">
          {codeLines.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: line.delay, duration: 0.5 }}
              className="mb-2"
            >
              <span className="text-[#3b82f6]">automify@</span>
              <span className="text-gray-400">mvp</span>
              <span className="text-[#3b82f6]">:</span>
              <span className="text-gray-300">~$ </span>
              <span className="text-white">{line.text}</span>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.5 }}
            className="flex items-center gap-2 mt-4"
          >
            <span className="text-[#3b82f6] animate-pulse">▋</span>
            <span className="text-gray-500 text-xs">Ready for your next project</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
