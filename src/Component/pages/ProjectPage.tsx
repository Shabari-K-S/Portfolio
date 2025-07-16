import { useParams } from "react-router-dom";
import { Project_List } from "../../data/Data";
import { useEffect, useState } from "react";
import MarkdownViewer from "../ui/MarkdownViewer";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";

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
    <div className="w-full text-white bg-[#0f0f11] min-h-screen">
      <Navbar />
      <div className="w-full max-w-4xl mx-auto px-5 md:px-8 mt-20">
        <div className="w-full rounded-xl bg-gradient-to-br from-[#434fd0] via-[#213da9] to-[#02026b] border border-[#3a3a3d] pt-12 px-4 pb-2 shadow-xl backdrop-blur-md">
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white drop-shadow-sm mb-3">
            {name}
          </h1>
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
        </div>


        <div className="mt-6 text-gray-300 text-justify leading-relaxed text-base sm:text-lg">
          {desc}
        </div>

        <div className="mt-6 w-full">
          <MarkdownViewer markdown={data} />
        </div>
      </div>

      <div className="w-full border-t border-zinc-800 mt-10" />
      <Footer />
    </div>

  )
}

export default ProjectPage
