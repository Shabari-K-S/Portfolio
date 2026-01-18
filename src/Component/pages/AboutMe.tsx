import Navbar from "../ui/Navbar";
import Experience from "../ui/Experience";
import Footer from "../ui/Footer";


const AboutMe = () => {
  return (
    <div className="bg-[#0f0f11] text-gray-200 min-h-screen selection:bg-blue-500/30">
      <Navbar />

      <main className="w-full max-w-5xl mx-auto px-6 md:px-12 pt-32 pb-20">

        {/* Header Section */}
        <div className="mb-16 border-b border-white/5 pb-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
            I'm a developer passionate about building tools that bridge the gap between complex logic and intuitive design.
          </p>
        </div>

        {/* Bio Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20 mb-20">

          {/* Left Column: Quick Stats / Highlights */}
          <div className="flex flex-col gap-6 lg:border-r border-white/5 lg:pr-10">
            <div className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Current Role</span>
              <div className="text-white font-medium">American Megatrends Inc (AMI)</div>
              <div className="text-sm text-gray-400">Product Engineering Trainee</div>
              <div className="text-xs text-gray-500 mt-1">MSG Department</div>
            </div>

            <div className="w-full h-px bg-white/5 my-2"></div>

            <div className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Education</span>
              <div className="text-white font-medium">Knowledge Institute of Technology</div>
              <div className="text-sm text-gray-400">B.E. Computer Science</div>
              <div className="text-xs text-gray-500 mt-1">2021 - 2025</div>
            </div>


          </div>

          {/* Right Column: Main Content */}
          <div className="lg:col-span-2 space-y-8 text-lg text-gray-300 leading-relaxed">
            <p>
              I'm <span className="text-white font-medium">Shabari K S</span>, a Product Engineering Trainee at <span className="text-blue-300">AMI</span> (MSG Department). I specialize in building high-performance applications using <span className="text-white font-medium">Python, Rust, and TypeScript</span>.
            </p>
            <p>
              My work focuses on systems programming and developer tools, from real-time code visualizers like <strong>CodeFlow</strong> to GPU-accelerated terminals like <strong>Terminon</strong>. I enjoy solving complex problems with efficient, maintainable code.
            </p>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mt-20">
          <Experience />
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default AboutMe;
