import React from "react";
import photo from "../Images/Portfolio Pic.jpg";

const About = () => {
  return (
    <section className="p-4 md:p-8 bg-gradient-to-r from-teal-400 to-blue-500 rounded-[14px]">
      {" "}
      {/* Adjusted padding */}
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6 flex flex-col lg:flex-row items-center">
        <img
          src={photo}
          alt="Suraj Tapase"
          className="w-64 h-64 rounded-full object-cover mb-6 lg:mb-0"
        />
        <div className="flex-grow text-center lg:text-left pl-4">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">About Me</h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-left md:text-justify">
            I am a results-driven Full Stack Developer with over 2.6+ years of
            professional experience in designing and developing scalable,
            user-centric web applications using React.js and Python. My work
            spans across impactful platforms such as job portals and official
            government dashboards, where I focused on delivering clean
            architecture, responsive interfaces, and optimized performance.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4 text-left md:text-justify">
            Currently, I serve as an Integration Developer, specializing in SAP
            Cloud Platform Integration (CPI), where I utilize JavaScript and
            Groovy scripting to streamline enterprise workflows and automate
            business processes. I have also worked extensively with Django for
            backend services and have deployed several applications using
            Netlify and other modern hosting platforms.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4 text-left md:text-justify">
            My technical expertise includes React.js, Python, Django,
            JavaScript, Groovy, GitHub, Netlify, REST APIs, and CI/CD practices.
            I have built and deployed multiple full-stack projects, all
            documented in well-maintained repositories on GitHub. I am
            passionate about solving real-world problems through technology and
            continuously upskilling to stay ahead in a fast-evolving tech
            landscape. Let’s connect and collaborate on innovative, impactful
            solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
