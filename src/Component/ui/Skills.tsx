import { FaReact } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiStreamlit } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { FaGolang } from "react-icons/fa6";
import { SiGnubash } from "react-icons/si";

const Skills = () => {
  return (
    <>
        <div className="text-white">
            <h1 className="text-3xl font-bold">What I Work With</h1>
            <div className="flex overflow-hidden space-x-8 mt-8 relative group select-none cursor-default">
              <div className="flex space-x-8 animate-loop-scroll group-hover:paused">
                <div className="flex gap-1 items-center"><FaReact className="w-[30px] h-[30px]" />React</div>
                <div className="flex gap-1 items-center"><FaHtml5 className="w-[30px] h-[30px]" />Html</div>
                <div className="flex gap-1 items-center"><FaCss3Alt className="w-[30px] h-[30px]" />CSS</div>
                <div className="flex gap-1 items-center"><FaJsSquare className="w-[30px] h-[30px]" />Javascript</div>
                <div className="flex gap-1 items-center"><BiLogoTypescript className="w-[34px] h-[34px]" />Typescript</div>
                <div className="flex gap-1 items-center"><SiStreamlit className="w-[30px] h-[40px]" />Streamlit</div>
                <div className="flex gap-1 items-center"><SiNextdotjs className="w-[30px] h-[40px]" />Next.js</div>
                <div className="flex gap-2 items-center"><RiTailwindCssFill className="w-[30px] h-[40px]" />Tailwind</div>
              </div>
              <div className="flex space-x-8 animate-loop-scroll group-hover:paused" aria-hidden="true">
                <div className="flex gap-1 items-center"><FaReact className="w-[30px] h-[30px]" />React</div>
                <div className="flex gap-1 items-center"><FaHtml5 className="w-[30px] h-[30px]" />Html</div>
                <div className="flex gap-1 items-center"><FaCss3Alt className="w-[30px] h-[30px]" />CSS</div>
                <div className="flex gap-1 items-center"><FaJsSquare className="w-[30px] h-[30px]" />Javascript</div>
                <div className="flex gap-1 items-center"><BiLogoTypescript className="w-[34px] h-[34px]" />Typescript</div>
                <div className="flex gap-1 items-center"><SiStreamlit className="w-[30px] h-[40px]" />Streamlit</div>
                <div className="flex gap-1 items-center"><SiNextdotjs className="w-[30px] h-[40px]" />Next.js</div>
                <div className="flex gap-2 items-center"><RiTailwindCssFill className="w-[30px] h-[40px]" />Tailwind</div>
              </div>
              <div className="absolute top-0 left-0 w-[70px] h-[70px] bg-linear-to-r from-[#111111] to-transparent"></div>
              <div className="absolute top-0 right-0 w-[70px] h-[70px] bg-linear-to-l from-[#111111] to-transparent"></div>
            </div>
            <div className="flex overflow-hidden space-x-8 mt-8 relative group select-none cursor-default">
              <div className="flex space-x-8 animate-loop-scroll-2 group-hover:paused">
                <div className="flex gap-2 items-center"><FaCopyright className="w-[30px] h-[30px]" />C</div>
                <div className="flex gap-2 items-center"><FaJava className="w-[30px] h-[30px]" />Java</div>
                <div className="flex gap-2 items-center"><FaPython className="w-[30px] h-[30px]" />Python</div>
                <div className="flex gap-2 items-center"><SiFlask className="w-[30px] h-[30px]" />Flask</div>
                <div className="flex gap-2 items-center"><FaNodeJs className="w-[30px] h-[30px]" />Node</div>
                <div className="flex gap-2 items-center"><FaFlutter className="w-[30px] h-[20px]" />Flutter</div>
                <div className="flex gap-2 items-center"><FaGolang className="w-[30px] h-[30px]" />Go</div>
                <div className="flex gap-2 items-center"><SiGnubash className="w-[30px] h-[30px]" />Bash</div>
              </div>
              <div className="flex space-x-8 animate-loop-scroll-2 group-hover:paused" aria-hidden="true">
                <div className="flex gap-2 items-center"><FaCopyright className="w-[30px] h-[30px]" />C</div>
                <div className="flex gap-2 items-center"><FaJava className="w-[30px] h-[30px]" />Java</div>
                <div className="flex gap-2 items-center"><FaPython className="w-[30px] h-[30px]" />Python</div>
                <div className="flex gap-2 items-center"><SiFlask className="w-[30px] h-[30px]" />Flask</div>
                <div className="flex gap-2 items-center"><FaNodeJs className="w-[30px] h-[30px]" />Node</div>
                <div className="flex gap-2 items-center"><FaFlutter className="w-[30px] h-[20px]" />Flutter</div>
                <div className="flex gap-2 items-center"><FaGolang className="w-[30px] h-[30px]" />Go</div>
                <div className="flex gap-2 items-center"><SiGnubash className="w-[30px] h-[30px]" />Bash</div>
              </div>
              <div className="absolute top-0 left-0 w-[70px] h-[70px] bg-linear-to-r from-[#111111] to-transparent"></div>
              <div className="absolute top-0 right-0 w-[70px] h-[70px] bg-linear-to-l from-[#111111] to-transparent"></div>
            </div>
        </div> 
    </>
  )
}

export default Skills
