import { useState } from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-[70px] text-white bg-[#111111] sticky">
      <div className="px-6 md:px-10 lg:px-16 xl:px-20 py-6 flex flex-row w-full justify-between items-center">
        <a className="text-2xl font-semibold cursor-pointer" href="/">Shabari K S</a>
        
        <div className="hidden md:flex flex-row gap-5">
          <a href="/" className="hover:text-gray-400">Home</a>
          <a href="/about" className="hover:text-gray-400">About</a>
          <a href="/projects" className="hover:text-gray-400">Projects</a>
          <a href="/contact" className="hover:text-gray-400">Contact Me</a>
        </div>
        
        <a
          className="hidden md:block p-2 rounded cursor-pointer bg-[#27272a] hover:bg-[#ededed] hover:text-zinc-800 transition ease-in-out duration-300 font-semibold"
          href="https://shabari-portfolio.onrender.com/"
          target="_blank"
        >
          Old Portfolio
        </a>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <Menu size={24} />
        </button>
      </div>
      
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-3 bg-[#111111] py-4">
          <a href="/" className="hover:text-gray-400 py-4 px-3 focus:border-b focus:border-[#e3e3e3] w-[80%] h-auto">Home</a>
          <a href="/about" className="hover:text-gray-400 py-4 px-3 focus:border-b focus:border-[#e3e3e3] w-[80%] h-auto">About</a>
          <a href="/projects" className="hover:text-gray-400 py-4 px-3 focus:border-b focus:border-[#e3e3e3] w-[80%] h-auto">Projects</a>
          <a href="/contact" className="hover:text-gray-400 py-4 px-3 focus:border-b focus:border-[#e3e3e3] w-[80%] h-auto">Contact Me</a>
          <a
            className="p-2 w-[80%] text-center rounded cursor-pointer bg-[#27272a] hover:bg-[#ededed] hover:text-zinc-800 transition ease-in-out duration-300 font-semibold"
            href="https://shabari-portfolio.onrender.com/"
            target="_blank"
          >
            Old Portfolio
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
