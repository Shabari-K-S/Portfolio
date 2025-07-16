import { useState } from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0f0f11] backdrop-blur-md shadow-md">
      <nav className="flex items-center justify-between px-6 md:px-10 lg:px-16 xl:px-20 h-[70px] text-white">
        {/* Logo */}
        <a className="text-2xl font-bold tracking-tight hover:text-blue-400 transition" href="/">
          Shabari K S
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="/" className="hover:text-blue-400 transition">Home</a>
          <a href="/about" className="hover:text-blue-400 transition">About</a>
          <a href="/projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="/contact" className="hover:text-blue-400 transition">Contact Me</a>
        </div>

        {/* Old Portfolio Button */}
        <a
          href="https://shabari-portfolio.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block bg-zinc-800 text-white px-4 py-1.5 rounded-md hover:bg-white hover:text-zinc-900 transition font-semibold text-sm"
        >
          Old Portfolio
        </a>

        {/* Mobile Hamburger */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="flex flex-col md:hidden px-6 py-4 gap-4 bg-black text-white text-sm font-medium shadow-inner">
          <a href="/" className="hover:text-blue-400 transition">Home</a>
          <a href="/about" className="hover:text-blue-400 transition">About</a>
          <a href="/projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="/contact" className="hover:text-blue-400 transition">Contact Me</a>
          <a
            href="https://shabari-portfolio.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-800 text-white px-4 py-2 rounded-md hover:bg-white hover:text-zinc-900 transition font-semibold text-center"
          >
            Old Portfolio
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
