// Certification.js
import React from 'react';
import { FaAward, FaCertificate } from 'react-icons/fa';

const Certification = () => {
  return (
    <div style={{paddingLeft:"3.5rem",paddingRight:"3.5rem",paddingBottom:"3rem"}}>
  <section id="certifications" className="flex justify-center p-6 md:p-12 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-lg shadow-lg">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-sm text-center border-t-4 border-blue-600">
        <div className="flex justify-center items-center mb-4 text-blue-600">
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
          <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full shadow-md font-semibold">
            Seal of Achievement
          </span>
        </div>
      </div>
    </section>
    </div>
  
  );
};

export default Certification;
