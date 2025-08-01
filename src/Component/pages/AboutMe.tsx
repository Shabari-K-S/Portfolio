import Navbar from "../ui/Navbar";
import Experience from "../ui/Experience";
import Footer from "../ui/Footer";

const AboutMe = () => {
  return (
    <div className="bg-[#0f0f11] text-white">
      <Navbar />
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 xl:px-24 flex flex-col space-y-10">
        <div className="flex flex-col gap-5 mt-10">
          <h2 className="text-4xl font-bold">About Me</h2>
          <div className="text-zinc-100/90 text-justify flex flex-col space-y-5 text-base sm:text-lg md:text-xl leading-relaxed">
            <span>
              I'm Shabari K S, a <span className="font-bold text-white">final-year Computer Science and Engineering</span> student at Knowledge Institute of Technology. I'm passionate about Web and App Development, specializing in <span className="font-bold text-white">Python</span> and <span className="font-bold text-white">Java</span>. I create full-stack websites with a minimalist approach, focusing on speed, accessibility, and SEO, with a user-first design philosophy.
            </span>

            <span>
              Currently, I'm working on projects like a <span className="font-bold text-white">self-improvement app</span> and a <span className="font-bold text-white">PCI Tree Analyzer</span>. I emphasize clear variable names and maintainable code, tackling challenges like custom programming languages to push my skills further.
            </span>

            <span>
              With a diverse range of interests, from <span className="font-bold text-white">BIOS development</span> and <span className="font-bold text-white">hacking</span>, I strive to apply my knowledge to real-world solutions while continually learning and growing as a developer.
            </span>
          </div>
        </div>
        <Experience />
        <div className="w-full border border-gray-700/40"></div>
        <Footer />
      </div>
    </div>
  );
};

export default AboutMe;
