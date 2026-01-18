import { useState, useEffect } from "react";
import { Menu, X, ExternalLink } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled || isOpen
        ? "bg-[#0f0f11]/80 backdrop-blur-md border-b border-white/5"
        : "bg-transparent border-b border-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">

        {/* Logo */}
        <a
          href="/"
          className="text-xl font-bold tracking-tight text-white hover:text-blue-400 transition-colors"
        >
          Shabari K S
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="/" label="Home" />
          <NavLink href="/about" label="About" />
          <NavLink href="/projects" label="Projects" />
          <NavLink href="/contact" label="Contact" />

          <div className="w-px h-6 bg-white/10 mx-2"></div>

          <a
            href="https://shabari-portfolio.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            <span>Old Portfolio</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-white transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#0f0f11] border-b border-white/5 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col px-6 py-8 gap-6">
            <MobileNavLink href="/" label="Home" />
            <MobileNavLink href="/about" label="About" />
            <MobileNavLink href="/projects" label="Projects" />
            <MobileNavLink href="/contact" label="Contact Me" />

            <div className="h-px bg-white/5 my-2"></div>

            <a
              href="https://shabari-portfolio.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-base font-medium text-gray-400 hover:text-white transition-colors"
            >
              <span>Old Portfolio</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

// Helper Components
const NavLink = ({ href, label }: { href: string; label: string }) => (
  <a
    href={href}
    className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
  >
    {label}
  </a>
);

const MobileNavLink = ({ href, label }: { href: string; label: string }) => (
  <a
    href={href}
    className="text-lg font-medium text-gray-300 hover:text-white transition-colors block"
  >
    {label}
  </a>
);

export default Navbar;
