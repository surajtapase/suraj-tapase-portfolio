import React from 'react';
// import Marquee from 'react-fast-marquee'; // Importing the Marquee component
// import { FaReact, FaPython, FaHtml5, FaCss3Alt, FaGithub } from 'react-icons/fa';
// import { SiDjango, SiMysql, SiPostgresql, SiJavascript } from 'react-icons/si';
import photo from "../Images/Portfolio Pic.jpg";

const About = () => {
  return (
    <section className="p-8 bg-gradient-to-r from-teal-400 to-blue-500 rounded-[14px]">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6 flex flex-col lg:flex-row items-center">
        <img 
          src={photo} 
          alt="Suraj Tapase"
          className="w-64 h-64 rounded-full object-cover mb-6 lg:mb-0" 
        />
        <div className="flex-grow text-center lg:text-left pl-4"> 
          <h2 className="text-3xl font-bold mb-4 text-gray-800">About Me</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            I am an experienced Full Stack Developer with 1.6+ years of expertise in React and Python. 
            I have worked on multiple high-impact projects in fast-paced environments, contributing to banking systems, 
            job portals, and official websites. I specialize in frontend (React.js) and backend development (Python, Django), 
            and am skilled in creating user-friendly and efficient solutions.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            I am passionate about leveraging technology to solve real-world problems and always eager to learn new skills. 
            Let’s connect to explore how I can contribute to your next project!
          </p>
        </div>
      </div>

    </section>
  );
};

export default About;
