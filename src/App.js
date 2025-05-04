import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Academic from "./components/academic/Academic";
import Project from "./components/project/Project";
import Experience from "./components/experience/Experience";

const App = () => {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Experience />
        <Academic />
        <Project />

        {/* <Contact /> */}
      </main>
    </>
  );
};

export default App;
