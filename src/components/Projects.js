import React, { useState } from 'react';

const projects = [
  {
    title: 'BPCL Credit Society Ltd',
    description: 'Developed a fully functional credit society platform using React.js, Django, and Spark. Integrated with MySQL databases for efficient data management.',
    techStack: 'React.js, Python, Django, Spark, MySQL',
  },
  {
    title: 'Job Mohotsav',
    description: 'Designed and implemented an online platform for job fairs using React.js and PHP. Integrated QR Code-based attendance and Power BI for reporting.',
    techStack: 'React.js, PHP, Power BI, QR Code Attendance System',
  },
  {
    title: 'TDTL Official Site',
    description: 'Created a responsive and scalable official website using React.js and SCSS. Focused on enhancing user experience and performance optimization.',
    techStack: 'React.js, SCSS',
  },
  {
    title: 'Digital University System',
    description: 'Built a comprehensive system for universities and colleges to manage placements, lectures, notes, and notices. Teachers, TPOs, and admin can efficiently manage tasks through this system, using React, Python with REST APIs for backend operations.',
    techStack: 'React.js, Python, REST API',
  }
];

const Projects = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <section id="projects" className="p-6 md:p-12 bg-gradient-to-r from-teal-400 to-blue-500 rounded-[14px]"> {/* Adjusted padding */}
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Projects</h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="relative bg-white rounded-lg shadow-md transition-shadow duration-300 flex flex-col justify-between hover:shadow-xl border-l-4 border-blue-500"
            style={{ minHeight: '350px' }} 
          >
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">{project.title}</h3>
              <p className="text-gray-600 mb-4">
                {expanded[index] ? project.description : `${project.description.substring(0, 100)}...`}
              </p>
            </div>

            <div className="px-6 pb-6 mt-auto">
              <p className="text-gray-500 italic">Tech Stack: {project.techStack}</p>
              <button
                onClick={() => toggleExpand(index)}
                className="text-blue-500 mt-2 inline-block hover:text-blue-700 transition-colors"
              >
                {expanded[index] ? 'Read Less' : 'Read More'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
