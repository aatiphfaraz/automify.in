"use client";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "9870633671"; // Number without dashes for WhatsApp URL
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const WhatsAppCTA = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#3b82f6] hover:bg-[#2563eb] shadow-lg hover:shadow-xl transition-all duration-300 border border-[#3b82f6]/20"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Pulse animation ring */}
        <motion.div
          className="absolute inset-0 rounded-full bg-[#3b82f6]"
          animate={{
            scale: [1, 1.5, 1.5],
            opacity: [0.5, 0, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
        
        {/* WhatsApp Icon */}
        <MessageCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white relative z-10" />
        
        {/* Tooltip on hover */}
        <div className="absolute right-full mr-4 px-3 py-2 bg-[#111111] border border-gray-800 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Chat with us on WhatsApp
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-[#111111]"></div>
        </div>
      </motion.a>
    </motion.div>
  );
};
