// Certification.js
import React from 'react';
import { FaAward, FaCertificate, FaBookReader } from 'react-icons/fa';

const Certification = () => {
  return (
    <div style={{ paddingLeft: "3.5rem", paddingRight: "3.5rem", paddingBottom: "3rem" }}>
      <section id="certifications" className="flex flex-col md:flex-row gap-6 justify-center p-6 md:p-12 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg shadow-lg">
        
        {/* JLPT N5 - Completed */}
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-sm text-center border-t-4 border-green-600">
          <div className="flex justify-center items-center mb-4 text-green-600">
            <FaAward className="text-5xl" />
          </div>
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Certification</h2>
          <h3 className="text-xl font-bold text-gray-700 mb-4 flex justify-center items-center">
            <FaCertificate className="text-green-500 mr-2" /> JLPT N5
          </h3>
          <p className="text-gray-600 italic">
            Awarded for proficiency in the Japanese Language at the N5 level.
          </p>
          <div className="flex justify-center mt-6">
            <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full shadow-md font-semibold">
              Completed
            </span>
          </div>
        </div>

        {/* JLPT N4 - In Progress */}
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-sm text-center border-t-4 border-yellow-500">
          <div className="flex justify-center items-center mb-4 text-yellow-500">
            <FaBookReader className="text-5xl" />
          </div>
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Certification</h2>
          <h3 className="text-xl font-bold text-gray-700 mb-4 flex justify-center items-center">
            <FaCertificate className="text-yellow-500 mr-2" /> JLPT N4
          </h3>
          <p className="text-gray-600 italic">
            Currently preparing for the Japanese Language Proficiency Test at the N4 level.
          </p>
          <div className="flex justify-center mt-6">
            <span className="bg-yellow-100 text-yellow-600 px-4 py-2 rounded-full shadow-md font-semibold">
              In Progress
            </span>
          </div>
        </div>
        
      </section>
    </div>
  );
};

export default Certification;
