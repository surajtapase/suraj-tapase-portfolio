import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';
import Skills from './components/Skills';
import MotivationalQuote from './components/MotivationalQuote';

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="about">
          <About />
        </section>
        <Skills/>
        <section id="projects">
          <Projects />
        </section>
        <MotivationalQuote/>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
