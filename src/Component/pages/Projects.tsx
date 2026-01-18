import Navbar from "../ui/Navbar";
import { Project_List, ProjectCardProps } from "../../data/Data";
import Footer from "../ui/Footer";
import { ArrowUpRight, Folder } from "lucide-react";

// 🔷 Project Card Component
export const ProjectCard = ({ id, name, lang, desc }: ProjectCardProps) => {
  return (
    <a
      href={`/projects/${id}`}
      className="group flex flex-col h-full bg-[#18181b] border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10"
    >
      <div className="p-6 md:p-8 flex flex-col flex-1 gap-6">

        {/* Header */}
        <div className="flex justify-between items-start">
          <div className="p-3 bg-white/5 rounded-xl border border-white/5 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 group-hover:text-blue-400 transition-colors">
            <Folder className="w-6 h-6" />
          </div>
          <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
            {name}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
            {desc}
          </p>
        </div>

        {/* Footer / Tags */}
        <div className="mt-auto pt-4 flex flex-wrap gap-2">
          {lang.slice(0, 3).map((prog, index) => (
            <span
              key={index}
              className="px-2.5 py-1 text-xs font-medium text-gray-400 bg-white/5 border border-white/5 rounded-md"
            >
              {prog}
            </span>
          ))}
          {lang.length > 3 && (
            <span className="px-2.5 py-1 text-xs font-medium text-gray-500">
              +{lang.length - 3}
            </span>
          )}
        </div>
      </div>
    </a>
  );
};

// 🔶 Projects Page Component
const Projects = () => {
  return (
    <div className="min-h-screen bg-[#0f0f11] text-white w-full flex flex-col selection:bg-blue-500/30">
      <Navbar />

      <main className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/5 pb-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
              Projects
            </h2>
            <p className="text-gray-400 max-w-lg">
              A collection of my work, ranging from web applications to backend APIs and developer tools.
            </p>
          </div>
          <div className="text-sm text-gray-500 font-medium">
            {Project_List.length} Projects Total
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Project_List.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
            />
          ))}
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default Projects;
