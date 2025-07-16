import { SiHackthebox } from "react-icons/si";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { RxSewingPin } from "react-icons/rx";
import { MdOutlineMailOutline } from "react-icons/md";

const Hero = () => {
  return (
    <div className="relative border border-white/10 bg-gradient-to-br from-[#1f1f1f] via-[#2a2a2a] to-[#1c1c1c] backdrop-blur-md text-white p-6 rounded-xl mt-16 shadow-xl transition-all duration-300 hover:shadow-2xl">
      <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-1">
        <div>
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 text-transparent bg-clip-text">
            Shabari K S
          </h1>
          <div className="flex items-center gap-2 text-gray-400 mt-1">
            <RxSewingPin className="w-5 h-5" />
            <span className="text-sm sm:text-base">Salem, Tamil Nadu, India</span>
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-5">
          <a
            href="mailto:shabaricse2003@gmail.com"
            className="p-2 rounded-md bg-neutral-800 border border-white/10 hover:scale-110 transition duration-300 hover:border-gray-400 hover:text-gray-300"
          >
            <MdOutlineMailOutline className="w-5 h-5" />
          </a>
          <a
            href="https://app.hackthebox.com/profile/1104708"
            className="p-2 rounded-md bg-neutral-800 border border-white/10 hover:scale-110 transition duration-300 hover:border-gray-400 hover:text-gray-300"
          >
            <SiHackthebox className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/Shabari-K-S"
            className="p-2 rounded-md bg-neutral-800 border border-white/10 hover:scale-110 transition duration-300 hover:border-gray-400 hover:text-gray-300"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/shabari-k-s/"
            className="p-2 rounded-md bg-neutral-800 border border-white/10 hover:scale-110 transition duration-300 hover:border-gray-400 hover:text-gray-300"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
        </div>
      </div>

      <p className="mt-4 text-neutral-300 leading-relaxed text-sm sm:text-base text-justify">
        I'm a final year B.Tech Computer Science student with a focus on web and app development. I have experience working with
        <span className="text-white font-medium"> Python</span>, 
        <span className="text-white font-medium"> Java</span>, 
        <span className="text-white font-medium"> Vite</span>, and 
        <span className="text-white font-medium"> Next.js</span>, and I’ve developed projects like 
        <span className="text-white font-medium"> WebStorm</span>, a web framework in Python.
      </p>
    </div>
  );
};

export default Hero;
