import { SiHackthebox } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { RxSewingPin } from "react-icons/rx";
import { MdOutlineMailOutline } from "react-icons/md";

const Hero = () => {
  return (
    <>
        <div className="border border-[#27272a] text-white p-4 rounded-md mt-16">
            <div className="flex flex-col sm:flex-row justify-between gap-1">
                <div>
                    <h1 className="text-4xl font-bold">Shabari K S</h1>
                    
                    <div className="flex flex-row items-center gap-0.5 text-[#9ca3af]">
                        <RxSewingPin className="w-[22px] h-[22px]" />
                        Salem, Tamil Nadu, India 
                    </div>
                </div>
                <div className="gap-5 flex flex-row items-center">
                    <a 
                        className="border-2 border-[#27272a] p-1.5 rounded-md cursor-pointer hover:shadow-amber-50 hover:shadow-2xl"
                        href="mailto:shabaricse2003@gmail.com"
                        >
                        <MdOutlineMailOutline className="w-[22px] h-[22px]" />
                    </a>
                    <a 
                        className="border-2 border-[#27272a] p-1.5 rounded-md cursor-pointer hover:shadow-amber-50 hover:shadow-2xl"
                        href="https://app.hackthebox.com/profile/1104708"
                        >
                        <SiHackthebox className="w-[22px] h-[22px]" />
                    </a>
                    <a 
                        className="border-2 border-[#27272a] p-1.5 rounded-md cursor-pointer hover:shadow-amber-50 hover:shadow-2xl"
                        href="https://github.com/Shabari-K-S"
                    >
                        <FaGithub className="w-[22px] h-[22px]" />
                    </a>
                    <a 
                        className="border-2 border-[#27272a] p-1.5 rounded-md cursor-pointer hover:shadow-amber-50 hover:shadow-2xl"
                        href="https://www.linkedin.com/in/shabari-k-s/"
                        >
                        <FaLinkedin className="w-[22px] h-[22px]" />
                    </a>
                </div>
            </div>
            <div className="mt-2 text-justify">
            I'm a final year B.Tech Computer Science student with a focus on web and app development. I have experience working with Python, Java, Vite, and Next.js, and I’ve developed projects like WebStorm, a web framework in Python.

            </div>
        </div>
    </>
  )
}

export default Hero
