import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";
import "./App.css";
import Footer from "./components/Footer";
<<<<<<< HEAD
=======
import ProjectDisplay from "./pages/ProjectDisplay";
>>>>>>> master

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/portfolio" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
<<<<<<< HEAD
=======
          <Route path="/project/:id" element={<ProjectDisplay />}></Route>
>>>>>>> master
          <Route path="/experience" element={<Experience />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
