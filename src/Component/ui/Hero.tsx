import { SiHackthebox } from "react-icons/si";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { RxSewingPin } from "react-icons/rx";
import { MdOutlineMailOutline } from "react-icons/md";

const Hero = () => {
  return (
    <div className="relative border border-white/10 bg-gradient-to-br from-[#1f1f1f] via-[#1a1a1a] to-[#121212] backdrop-blur-md text-white p-8 md:p-10 rounded-2xl shadow-2xl transition-all duration-300 hover:border-white/20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-gray-200 to-gray-400 text-transparent bg-clip-text tracking-tight mb-2">
            Shabari K S
          </h1>
          <div className="flex items-center gap-2 text-gray-400 font-medium">
            <RxSewingPin className="w-4 h-4 text-blue-400" />
            <span className="text-sm md:text-base">Salem, Tamil Nadu, India</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <SocialLink href="mailto:shabaricse2003@gmail.com" icon={<MdOutlineMailOutline />} />
          <SocialLink href="https://github.com/Shabari-K-S" icon={<FaGithub />} />
          <SocialLink href="https://www.linkedin.com/in/shabari-k-s/" icon={<FaLinkedin />} />
          <SocialLink href="https://app.hackthebox.com/profile/1104708" icon={<SiHackthebox />} />
        </div>
      </div>

      <div className="w-full h-px bg-white/5 my-8"></div>

      <p className="text-gray-300 leading-relaxed text-base md:text-lg max-w-3xl">
        I'm a Product Engineering Trainee at <span className="text-white font-semibold">AMI</span> and a Computer Science graduate.
        I specialize in building high-performance systems and developer tools using
        <span className="text-blue-300 font-medium"> Python</span>,
        <span className="text-orange-300 font-medium"> Rust</span>, and
        <span className="text-yellow-200 font-medium"> TypeScript</span>.
      </p>
    </div>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105"
  >
    <div className="text-xl">{icon}</div>
  </a>
);

export default Hero;
