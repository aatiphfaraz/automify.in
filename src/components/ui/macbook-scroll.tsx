"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";

export const MacbookScroll = ({
  src,
  title,
  badge,
  showGradient = true,
}: {
  src: string;
  title: string | React.ReactNode;
  badge?: React.ReactNode;
  showGradient?: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scaleX = useTransform(scrollYProgress, [0, 0.3], [1.2, 1]);
  const scaleY = useTransform(scrollYProgress, [0, 0.3], [0.6, 1]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.5, 1], [1, 1, 1, 0]);

  return (
    <div
      ref={ref}
      className="min-h-[200vh] flex flex-col items-center justify-start pt-40 pb-20"
    >
      <div className="sticky top-40 flex flex-col items-center">
        <motion.div
          style={{
            scaleX,
            scaleY,
            opacity,
          }}
          className="relative"
        >
          <div className="w-[75vw] md:w-[65vw] lg:w-[60vw] h-[45vw] md:h-[38vw] lg:h-[35vw] rounded-lg border border-gray-800 bg-[#0a0a0a] p-2 md:p-4 shadow-2xl">
            <div className="relative w-full h-full rounded-lg overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2a] to-[#0a0a0a]">
              {src && src.trim() && src.startsWith('/') ? (
                <Image
                  src={src}
                  alt="Macbook display"
                  fill
                  className="object-cover"
                  priority
                  onError={(e) => {
                    // Fallback to gradient if image fails to load
                    e.currentTarget.style.display = 'none';
                  }}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2a] to-[#0a0a0a] p-8">
                  {/* Simulated app interface */}
                  <div className="w-full max-w-2xl space-y-4">
                    {/* Header bar */}
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                      <div className="flex-1 h-8 bg-gray-800/50 rounded-lg ml-4"></div>
                    </div>
                    {/* Content grid */}
                    <div className="grid grid-cols-3 gap-4">
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="h-24 bg-gradient-to-br from-[#3b82f6]/10 to-[#3b82f6]/5 rounded-lg border border-[#3b82f6]/20"></div>
                      ))}
                    </div>
                    {/* Bottom section */}
                    <div className="flex gap-4 mt-4">
                      <div className="flex-1 h-32 bg-gray-800/30 rounded-lg border border-gray-700/50"></div>
                      <div className="flex-1 h-32 bg-gray-800/30 rounded-lg border border-gray-700/50"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* MacBook frame */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Top bezel */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-6 md:h-8 bg-[#1a1a1a] rounded-t-lg border border-gray-800">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-1 bg-[#0a0a0a] rounded-full"></div>
            </div>
            {/* Bottom bezel */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] h-4 md:h-6 bg-[#1a1a1a] rounded-b-lg border border-gray-800"></div>
            {/* Left side */}
            <div className="absolute left-0 top-6 md:top-8 bottom-4 md:bottom-6 w-2 md:w-3 bg-[#1a1a1a] border-l border-gray-800 rounded-l-lg"></div>
            {/* Right side */}
            <div className="absolute right-0 top-6 md:top-8 bottom-4 md:bottom-6 w-2 md:w-3 bg-[#1a1a1a] border-r border-gray-800 rounded-r-lg"></div>
            {/* Logo */}
            <div className="absolute bottom-2 md:bottom-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#2a2a2a] rounded-full"></div>
          </div>
        </motion.div>
        {showGradient && (
          <div className="pointer-events-none absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_bottom_right,var(--tw-gradient-stops))] from-[#3b82f6]/20 via-transparent to-transparent opacity-40 blur-3xl"></div>
        )}
        <div className="mt-8 md:mt-12 text-center">
          {badge && <div className="mb-4">{badge}</div>}
          <h3 className="text-2xl md:text-4xl font-bold text-white">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};
