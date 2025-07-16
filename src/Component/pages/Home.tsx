import Navbar from "../ui/Navbar"
import Hero from "../ui/Hero"
import Skills from "../ui/Skills"
import ProjectList from "../ui/ProjectList"
import Experience from "../ui/Experience"
import Footer from "../ui/Footer"

const Home = () => {
  return (
    <div className="bg-[#0f0f11] text-white min-h-screen">
      <Navbar />
      
      <main className="flex flex-col justify-center px-[7%] lg:px-[20%] space-y-14 mt-6">
        <Hero />
        <Skills />
        <Experience />
        <ProjectList count={3} />
      </main>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#2e2e2e] to-transparent my-10" />
      
      <Footer />
    </div>
  )
}

export default Home
