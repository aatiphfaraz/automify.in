"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const { title, description, images, tags, link } = project;
  const imageCount = images.length;

  // Render collage layout based on number of images
  const renderImageCollage = () => {
    if (imageCount === 1) {
      // Single image - full width
      return (
        <div className="relative w-full h-64 sm:h-72 md:h-80 overflow-hidden rounded-t-xl">
          <Image
            src={images[0]}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      );
    } else if (imageCount === 2) {
      // Two images - side by side
      return (
        <div className="grid grid-cols-2 gap-1 h-64 sm:h-72 md:h-80">
          {images.map((img, idx) => (
            <div key={idx} className="relative overflow-hidden rounded-t-xl first:rounded-tl-xl last:rounded-tr-xl">
              <Image
                src={img}
                alt={`${title} - Image ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
              />
            </div>
          ))}
        </div>
      );
    } else if (imageCount === 3) {
      // Three images - one large, two small
      return (
        <div className="grid grid-cols-2 gap-1 h-64 sm:h-72 md:h-80">
          <div className="relative row-span-2 overflow-hidden rounded-tl-xl">
            <Image
              src={images[0]}
              alt={`${title} - Image 1`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
            />
          </div>
          <div className="relative overflow-hidden rounded-tr-xl">
            <Image
              src={images[1]}
              alt={`${title} - Image 2`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
            />
          </div>
          <div className="relative overflow-hidden">
            <Image
              src={images[2]}
              alt={`${title} - Image 3`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
            />
          </div>
        </div>
      );
    } else {
      // Four or more images - 2x2 grid (show first 4)
      return (
        <div className="grid grid-cols-2 gap-1 h-64 sm:h-72 md:h-80">
          {images.slice(0, 4).map((img, idx) => (
            <div
              key={idx}
              className={`relative overflow-hidden ${
                idx === 0 ? "rounded-tl-xl" : ""
              } ${idx === 1 ? "rounded-tr-xl" : ""}`}
            >
              <Image
                src={img}
                alt={`${title} - Image ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
              />
              {idx === 3 && images.length > 4 && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    +{images.length - 4}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      );
    }
  };

  const CardContent = (
    <>
      {/* Image Collage Section */}
      <div className="relative overflow-hidden bg-gray-900">
        {renderImageCollage()}
        {/* Overlay gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-xl font-bold text-white group-hover:text-[#3b82f6] transition-colors line-clamp-2">
            {title}
          </h3>
          {link && (
            <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-[#3b82f6] transition-colors flex-shrink-0 mt-1" />
          )}
        </div>

        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 bg-[#3b82f6]/10 border border-[#3b82f6]/20 rounded-md text-xs text-[#3b82f6] font-mono"
              >
                {tag}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="px-2.5 py-1 bg-gray-800 border border-gray-700 rounded-md text-xs text-gray-400 font-mono">
                +{tags.length - 3}
              </span>
            )}
          </div>
        )}
      </div>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group bg-[#111111] border border-gray-800 rounded-xl overflow-hidden hover:border-[#3b82f6]/50 transition-all backdrop-blur-sm"
    >
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block cursor-pointer"
          aria-label={`View ${title} project`}
        >
          {CardContent}
        </a>
      ) : (
        <div className="cursor-default">{CardContent}</div>
      )}
    </motion.div>
  );
};
