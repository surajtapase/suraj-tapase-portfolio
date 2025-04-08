import React from 'react';
import Marquee from 'react-fast-marquee';
import { FaReact, FaPython, FaHtml5, FaCss3Alt, FaGithub, FaNodeJs, } from 'react-icons/fa';
import { SiDjango, SiMysql, SiPostgresql, SiJavascript, SiTailwindcss, SiMongodb, SiSap, SiApachegroovy } from 'react-icons/si';

export default function Skills() {
  return (
    <div>
      <Marquee speed={50} pauseOnHover>
        <div className="flex items-center space-x-12">
          <span className="flex items-center" style={{ color: '#61DAFB' }}>
            <FaReact className="mr-2" size={38} /> React.js
          </span>
          <span className="flex items-center" style={{ color: '#3776AB' }}>
            <FaPython className="mr-2" size={38} /> Python
          </span>
          <span className="flex items-center" style={{ color: '#092E20' }}>
            <SiDjango className="mr-2" size={38} /> Django
          </span>
          <span className="flex items-center" style={{ color: '#F7DF1E' }}>
            <SiJavascript className="mr-2" size={38} /> JavaScript
          </span>
          <span className="flex items-center" style={{ color: '#E44D26' }}>
            <FaHtml5 className="mr-2" size={38} /> HTML
          </span>
          <span className="flex items-center" style={{ color: '#1572B6' }}>
            <FaCss3Alt className="mr-2" size={38} /> CSS
          </span>
          <span className="flex items-center" style={{ color: '#38B2AC' }}>
            <SiTailwindcss className="mr-2" size={38} /> Tailwind CSS
          </span>
          <span className="flex items-center" style={{ color: '#00758F' }}>
            <SiMysql className="mr-2" size={38} /> MySQL
          </span>
          <span className="flex items-center" style={{ color: '#336791' }}>
            <SiPostgresql className="mr-2" size={38} /> PostgreSQL
          </span>
          <span className="flex items-center" style={{ color: '#68A063' }}>
            <FaNodeJs className="mr-2" size={38} /> Node.js
          </span>
          <span className="flex items-center" style={{ color: '#47A248' }}>
            <SiMongodb className="mr-2" size={38} /> MongoDB
          </span>
          <span className="flex items-center" style={{ color: '#181717' }}>
            <FaGithub className="mr-2" size={38} /> GitHub
          </span>
          <span className="flex items-center" style={{ color: '#0BB2ED' }}>
            <SiSap className="mr-2" size={38} /> SAP CPI
          </span>
          <span className="flex items-center" style={{ color: '#555' }}>
            <SiApachegroovy className="mr-2" size={38} /> Groovy
          </span>
        </div>
      </Marquee>
    </div>
  );
}
