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
          <p className="text-gray-700 leading-relaxed mb-4 text-justify md:text-left">
            I am a skilled Full Stack Developer with 2+ years of professional
            experience in building scalable and responsive applications using
            React.js and Python. Over the years, I have contributed to various
            impactful projects, including job platforms and official portals,
            focusing on delivering clean, efficient, and user-centric solutions.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4 text-justify md:text-left">
            Currently, I am working as an Integration Developer specializing in
            SAP Cloud Platform Integration (CPI), with hands-on experience in
            JavaScript and Groovy scripting. I integrate enterprise systems with
            precision and performance in mind, streamlining workflows and
            automating business processes.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4 text-justify md:text-left">
            I am passionate about solving real-world problems through technology
            and continuously expanding my skill set to stay ahead in the
            evolving tech landscape. Let’s connect to collaborate on innovative
            and impactful projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
