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
            Results-driven Full Stack Developer with 2.6+ years of experience in
            designing and building scalable, high-performance web applications
            using ReactJS, JavaScript, Java, and Python. Proven expertise in
            developing modular frontend architectures, implementing RESTful
            backend services, and delivering responsive, user-centric
            interfaces. Hands-on experience working on enterprise and government
            platforms, including job portals and official dashboards, with a
            strong focus on clean code, system performance optimization, and
            maintainable application design.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4 text-left md:text-justify">
            Currently working as an Integration Developer, building and
            optimizing enterprise-grade integrations using JavaScript and
            automation to streamline business workflows. Experienced in
            developing backend services with Python and Django and designing
            RESTful APIs for scalable applications.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4 text-left md:text-justify">
            Proficient in ReactJS, JavaScript, Java, Python, Django, REST APIs,
            and CI/CD practices, with hands-on experience deploying applications
            on modern cloud platforms. Strong believer in clean code, efficient
            system design, and continuous learning to solve real-world problems
            effectively.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
