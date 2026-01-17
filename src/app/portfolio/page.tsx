import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work | Portfolio",
  description: "Explore our portfolio of successful projects. From MVPs to enterprise solutions, see how we've helped startups and businesses build and scale their digital products.",
  keywords: "portfolio, projects, case studies, web development, mobile apps, MVP development, software projects",
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f1a] to-[#0a0a0a]">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3b82f6]/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#3b82f6]/20 rounded-full blur-3xl"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
          </div>

          <div className="relative z-10 container mx-auto max-w-7xl text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#3b82f6]/10 border border-[#3b82f6]/20 rounded-full mb-6">
              <span className="text-xs text-[#3b82f6] font-mono uppercase tracking-wider">Our Work</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Projects That{" "}
              <span className="text-[#3b82f6] bg-clip-text text-transparent bg-gradient-to-r from-[#3b82f6] to-[#60a5fa]">
                Speak for Themselves
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              From MVPs to enterprise solutions, explore the digital products we&apos;ve built and scaled for startups and businesses worldwide.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 px-6 pt-0 relative">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
