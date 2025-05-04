import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Publication from "./components/publication/Publication";
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
        <Publication />
        <Project />

        {/* <Contact /> */}
      </main>
    </>
  );
};

export default App;
