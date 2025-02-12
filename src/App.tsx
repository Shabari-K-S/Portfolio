import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/pages/Home";
import AboutMe from "./Component/pages/AboutMe";
import Projects from "./Component/pages/Projects";
import ProjectPage from "./Component/pages/ProjectPage";
import Contacts from "./Component/pages/Contacts";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<AboutMe />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/projects/:id" element={<ProjectPage />}></Route>
          <Route path="/contact" element={<Contacts />}></Route>
        </Routes>
      </Router>
      
    </>
  )
}

export default App
