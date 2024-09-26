import React from 'react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="p-4 md:p-12 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg shadow-md">
      <h2 className="text-3xl md:text-4xl font-semibold mb-6 md:mb-8 text-center text-white tracking-wide">Get in Touch</h2>
      
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-8 transition-transform transform hover:scale-105 duration-300">
        <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6 text-center">
          I’m currently open to new opportunities and collaborations. Don't hesitate to reach out!
        </p>

        <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:justify-between md:space-x-4"> {/* Added space-x-4 for spacing */}
          
          {/* Email */}
          <div className="flex items-center space-x-2 bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-200 border-l-4 border-blue-600 w-full md:w-1/2">
            <FaEnvelope className="text-blue-600 text-3xl" />
            <p className="text-gray-800 text-center text-sm md:text-base">
              <a href="mailto:surajtapase24@gmail.com" className="font-medium hover:text-blue-700">
                surajtapase24@gmail.com
              </a>
            </p>
          </div>
          
          {/* LinkedIn */}
          <div className="flex items-center space-x-2 bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-200 border-l-4 border-blue-800 w-full md:w-1/2">
            <FaLinkedin className="text-blue-800 text-3xl" />
            <p className="text-gray-800 text-center text-sm md:text-base">
              <a href="https://www.linkedin.com/in/suraj-tapase-a7a025238/" className="font-medium hover:text-blue-700">
                linkedin.com/in/suraj-tapase
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
