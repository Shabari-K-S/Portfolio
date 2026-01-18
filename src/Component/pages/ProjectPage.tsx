import { useParams } from "react-router-dom";
import { Project_List } from "../../data/Data";
import { useEffect, useState } from "react";
import MarkdownViewer from "../ui/MarkdownViewer";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
import { ArrowLeft, ExternalLink, Github, Calendar, Layers } from "lucide-react";

const ProjectPage = () => {

  const params = useParams();
  const [name, setName] = useState("");
  const [lang, setLang] = useState([""]);
  const [desc, setDesc] = useState("");
  const [data, setData] = useState("");

  const [liveLink, setLiveLink] = useState("");

  const [hideSource, setHideSource] = useState(false);
  const [github, setGithub] = useState("");


  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Project_List.map((project, _) => {
      if (project.id == params.id) {
        setName(project.name);
        setLang(project.lang);
        setDesc(project.desc);
        setData(project.data);

        setLiveLink(project.liveLink || "");

        setHideSource(project.hideSource || false);
        setGithub(project.github || "");
      }
    })
  }, [params.id])

  return (
    <div className="w-full bg-[#0f0f11] text-gray-200 min-h-screen font-sans selection:bg-blue-500/30">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 md:px-12 pt-24 md:pt-32 pb-20">

        {/* Back Link */}
        <a href="/projects" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 md:mb-8 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Projects</span>
        </a>

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 lg:items-start mb-10 md:mb-16 border-b border-white/5 pb-8 md:pb-10">
          <div className="flex-1">
            <h1 className="text-3xl md:text-6xl font-bold text-white tracking-tight mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500">
              {name}
            </h1>

            {/* Mobile Project Info (Visible only on mobile) */}
            <div className="flex lg:hidden items-center gap-4 text-sm text-gray-500 mb-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>2024</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-gray-700"></div>
              <div className="text-xs">
                Modern Web Dev
              </div>
            </div>

            <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl">
              {desc}
            </p>
          </div>

          <div className="w-full lg:w-80 flex flex-col gap-4">
            <div className="p-4 md:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3 md:mb-4 flex items-center gap-2">
                <Layers className="w-4 h-4" /> Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {lang.map((tag, i) => (
                  <span key={i} className="px-2.5 py-1 md:px-3 md:py-1.5 bg-blue-500/10 text-blue-300 border border-blue-500/20 text-xs font-medium rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className={`grid ${liveLink && !hideSource ? "grid-cols-2" : "grid-cols-1"} lg:flex lg:flex-col gap-2 md:gap-3`}>
              {liveLink && (
                <a href={liveLink} target="_blank" rel="noreferrer" className="flex items-center justify-center lg:justify-between p-3 md:p-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all shadow-lg hover:shadow-blue-500/25 text-sm md:text-base">
                  <span>Live Demo</span>
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              )}
              {!hideSource && github && (
                <a href={github} target="_blank" rel="noreferrer" className="flex items-center justify-center lg:justify-between p-3 md:p-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium border border-white/10 transition-all text-sm md:text-base">
                  <span>Source</span>
                  <Github className="w-4 h-4 ml-2" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-9">
            <div className="p-5 md:p-12 rounded-2xl md:rounded-3xl bg-white/[0.02] border border-white/5">
              <MarkdownViewer markdown={data} />
            </div>
          </div>

          {/* Sticky Sidebar (Table of Contents / Info) - Desktop Only */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24 flex flex-col gap-6">
              <div className="text-sm text-gray-500">
                <p className="mb-2 font-medium text-gray-400">Project Info</p>
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>2024</span>
                </div>
                <div className="text-xs leading-relaxed">
                  This project showcases modern web development practices and clean architecture.
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>

  )
}

export default ProjectPage
