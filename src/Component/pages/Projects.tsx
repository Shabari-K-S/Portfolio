import Navbar from "../ui/Navbar";
import { Project_List, ProjectCardProps } from "../../data/Data";
import Footer from "../ui/Footer";

// 🔷 Project Card Component
export const ProjectCard = ({ id, name, lang, desc }: ProjectCardProps) => {
  return (
    <div className="w-full rounded-xl border border-white/10 bg-gradient-to-br from-white/5 via-white/10 to-white/5 p-6 backdrop-blur-md shadow-md hover:shadow-2xl transition-transform duration-300 hover:-translate-y-1">
      <div className="flex flex-col gap-4">
        {/* Title */}
        <h3 className="text-2xl font-semibold text-white hover:text-blue-400 transition-colors">
          {name}
        </h3>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2">
          {lang.map((prog, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm font-medium text-blue-300 bg-blue-900/20 border border-blue-500/30 rounded-md dark:bg-neutral-800"
            >
              {prog}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-neutral-300 leading-relaxed text-sm line-clamp-4">
          {desc}
        </p>

        {/* Project Link */}
        <a
          href={`/projects/${id}`}
          className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-blue-400 hover:text-blue-300 hover:underline transition"
        >
          Project Link
          <svg
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
};

// 🔶 Projects Page Component
const Projects = () => {
  return (
    <div className="min-h-screen bg-[#0f0f11] text-white w-full flex flex-col">
      <Navbar />

      <main className="w-full px-6 md:px-20 max-w-screen-xl mx-auto mt-14 flex flex-col gap-12">
        <h2 className="text-4xl font-bold text-center md:text-left">🚀 Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5 md:px-10 mt-10">
          {Project_List.map((project) => (
            <div key={project.id} className="bg-gradient-to-br from-[#1e1e22] via-[#151517] to-[#101012] border border-zinc-800 rounded-xl shadow-md p-5 transition duration-300 hover:scale-[1.02] hover:shadow-xl">
              <h2 className="text-xl font-semibold text-white mb-3">{project.name}</h2>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.lang.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2.5 py-1 rounded-full text-sm font-medium text-zinc-200 bg-[#0f0f0f] border border-zinc-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-zinc-400 text-sm line-clamp-4 mb-4">{project.desc}</p>
              <a
                href={`/projects/${project.id}`}
                className="text-blue-400 hover:underline text-sm"
              >
                Project Link →
              </a>
            </div>
          ))}
        </div>

      </main>

      <footer className="w-full mt-16">
        <div className="w-full h-px bg-gray-700/40 my-10" />
        <Footer />
      </footer>
    </div>
  );
};

export default Projects;
