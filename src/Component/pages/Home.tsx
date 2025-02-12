import Navbar from "../ui/Navbar"
import Hero from "../ui/Hero"
import Skills from "../ui/Skills"
import ProjectList from "../ui/ProjectList"
import Experience from "../ui/Experience"
import Footer from "../ui/Footer"

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center md:px-[20%] space-y-10 px-[7%]">  
        <Hero />
        <Skills />
        <Experience />
        <ProjectList />
        <div className="w-full border border-gray-700/40"></div>
        <Footer />
      </div>
    </div>
  )
}

export default Home
