import React, { useState } from "react";
import project1 from "../assets/Aliens.jpeg";
import project2 from "../assets/Project2.png";
import arrow from "../assets/arrow.png";
import { AiFillGithub } from "react-icons/ai";

const projects = [
  {
    img: project1,
    title: "Project #1",
    description: "This project is a Node.js-based web application designed for making reservations at a coffee shop exclusively for aliens. The application is built using JavaScript, CSS, EJS (Embedded JavaScript templates), and SCSS (Sassy CSS).",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    img: project2,
    title: "Project #2",
    description: "This ongoing project aims to develop an e-commerce website specifically designed to facilitate event organization.",
    links: {
      site: "#",
      github: "#",
    },
  },
  
];

const Portfolio = () => {
  const [currentProject, setCurrentProject] = useState(0);

  return (
    <div
      className=" my-12 max-w-[1200px] mx-auto grid grid-cols-8 gap-6"
      id="portfolio"
    >
      <div className="relative z-12 col-span-3 grid place-items-center grid-cols-1">
        <p className="text-gray-200 font-bold text-4xl -skew-y-6">
          Select Project
        </p>
        <img
          src={arrow}
          className="absolute w-[50px] top-10 right-0 md:right-12"
        />
        <ul className="ml-6 flex flex-row md:flex-col gap-6 flex-wrap justify-center md:gap-1 space-y-2 md:space-y-4 text-2xl">
          {projects.map((project, index) => (
            <li
              key={index}
              onClick={() => setCurrentProject(index)}
              className={`cursor-pointer text-gray-300 ${
                currentProject === index ? "active-project" : ""
              }`}
            >
              {project.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="z-10 glass w-full col-span-5">
        <div className="w-full h-80">
          <img
            src={projects[currentProject].img}
            alt={projects[currentProject].title}
            className="w-full h-full object-fill  rounded-lg mb-4"
          />
        </div>
        <div className="p-6">
          <p className="text-gray-200 my-4">
            {projects[currentProject].description}
          </p>
          <div className="flex space-x-4">
            <a
              href={projects[currentProject].links.site}
              className="px-4 py-2 bg-slate-600
              text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
            >
              View Site
            </a>
            <a
              href={projects[currentProject].links.github}
              className="text-2xl px-4 py-2 bg-slate-600
              text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
            >
              <AiFillGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
