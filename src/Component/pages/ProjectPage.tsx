import { useParams } from "react-router-dom";
import { Project_List } from "../../data/Data";
import { useEffect, useState } from "react";
import MarkdownViewer from "../ui/MarkdownViewer";
import Navbar from "../ui/Navbar";

const ProjectPage = () => {

  const params = useParams();
  const [name, setName] = useState("");
  const [lang, setLang] = useState([""]);
  const [desc, setDesc] = useState("");
  const [data, setData] = useState("");


  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Project_List.map((project, _) => {
      if(project.id == params.id){
        setName(project.name);
        setLang(project.lang);
        setDesc(project.desc);
        setData(project.data);
      }
    })
  },[params.id])  

  console.log(params.id);



  return (
    <div className="w-full text-white">
      <Navbar />
      <div className="text-white w-full md:max-w-4xl mx-auto">
        <div className="p-4 md:p-7 flex flex-col gap-2">
          <div className="w-full h-[150px] bg-gradient-to-tr from-[#1E4664] via-[#1E9064] to-[#15BDD5] rounded-lg">
            <div className="flex flex-col justify-end h-full p-5">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
                  {name}
              </h1>
              <div>
                  {
                      lang.map((prog, index) => (
                          <span key={index} className="inline-block bg-gray-200 rounded-md border-2 border-gray-500 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 dark:bg-gray-700 dark:text-gray-200">{prog}</span>
                      ))
                  }
              </div>
            </div>
          </div>
          
          
          <p className="mt-2 text-justify">
              {desc}
          </p>
          <MarkdownViewer markdown={data} />
        </div>
      </div>
    </div>
  )
}

export default ProjectPage
