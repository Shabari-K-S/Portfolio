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

      <main className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20 space-y-24">
        <Hero />
        <Skills />
        <Experience />
        <ProjectList count={3} />
      </main>

      <Footer />
    </div>
  )
}

export default Home
