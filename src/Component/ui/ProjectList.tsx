import { Project_List } from "../../data/Data"
import { ProjectCard } from "../pages/Projects"

const ProjectList = () => {
  return (
    <div>
        <h1 className="text-4xl font-bold text-white mb-2">My Projects</h1>
        <div className="flex flex-col gap-10 mt-10 mb-10">
        {
            Project_List.map((project, index) => (
                <ProjectCard key={index} name={project.name} lang={project.lang} desc={project.desc} id={project.id} />
            ))
        }
        </div>
        <div className="flex justify-center items-center mb-10">
                <a href="/projects" className="mt-4 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                    Show more 
                    <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
        </div>
    </div>

  )
}

export default ProjectList
