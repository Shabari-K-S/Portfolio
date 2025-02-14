import Navbar from "../ui/Navbar"
import { Project_List, ProjectCardProps } from "../../data/Data"
import Footer from "../ui/Footer"

export const ProjectCard = ( { id, name, lang, desc}: ProjectCardProps ) => {

    return (
        <div className="max-w-full flex flex-col bg-white border border-t-4 border-t-gray-600 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:border-t-gray-500 dark:shadow-neutral-700/70">
            <div className="p-4 md:p-5 flex flex-col gap-2">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                    {name}
                </h3>
                <div>
                    {
                        lang.map((prog, index) => (
                            <span key={index} className="inline-block bg-gray-200 rounded-md border-2 border-gray-500 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 dark:bg-gray-700 dark:text-gray-200">{prog}</span>
                        ))
                    }
                </div>
                <p className="mt-2 text-gray-500 dark:text-neutral-400 line-clamp-3">
                    {desc}
                </p>
                <a
                    className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-gray-400 decoration-2 hover:text-gray-200 hover:underline focus:underline focus:outline-none focus:text-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-500 dark:hover:text-gray-200 dark:focus:text-gray-100" 
                    href={`/projects/${id}`}  
                >
                    Project Link
                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m9 18 6-6-6-6"></path>
                </svg>
                </a>
            </div>
        </div>
    )
}


const Projects = () => {
  return (
    <div className="text-white w-full">
        <Navbar />
        <div className="flex flex-col justify-center px-[7%] md:px-[20%] space-y-10"> 
            <h2 className="text-4xl text-white font-bold mt-10">Projects</h2>
            <div className="flex flex-col gap-10 mb-10">
                {
                    Project_List.map((project, index) => (
                        <ProjectCard key={index} name={project.name} lang={project.lang} desc={project.desc} id={project.id} />
                    ))
                }
            </div>
        </div>
        <div className="flex flex-col items-center w-full justify-center mt-5 gap-5">
            <div className="min-w-3xl h-0.5 mt-5 bg-[#222222]"></div>
            <Footer />
      </div>
    </div>
  )
}

export default Projects
