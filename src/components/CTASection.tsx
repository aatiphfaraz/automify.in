"use client";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CALENDLY_URL } from "@/lib/constants";

export const CTASection = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f1a] to-[#0a0a0a]">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#3b82f6]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto max-w-4xl text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12 px-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Build Your{" "}
            <span className="text-[#3b82f6]">Next Big Thing?</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-4">
            Let&apos;s talk about your project. We&apos;ll help you validate your idea, plan the roadmap, and bring it to life.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Button 
            size="lg" 
            className="bg-[#3b82f6] hover:bg-[#2563eb] text-white px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base w-full sm:w-auto"
            asChild
          >
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              Schedule a Free Consultation
              <ArrowRight className="ml-2" />
            </a>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-gray-700 text-white hover:bg-gray-800 px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base w-full sm:w-auto"
            asChild
          >
            <a href="mailto:contact@automify.in">
              contact@automify.in
            </a>
          </Button>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 px-4"
        >
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#3b82f6]/10 flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-[#3b82f6]" />
            </div>
            <h3 className="text-white font-semibold mb-2">Email Us</h3>
            <p className="text-gray-400 text-sm">contact@automify.in</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#3b82f6]/10 flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-[#3b82f6]" />
            </div>
            <h3 className="text-white font-semibold mb-2">Call Us</h3>
            <p className="text-gray-400 text-sm">+91 98706 33671</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#3b82f6]/10 flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-[#3b82f6]" />
            </div>
            <h3 className="text-white font-semibold mb-2">Location</h3>
            <p className="text-gray-400 text-sm">New Delhi, India</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
