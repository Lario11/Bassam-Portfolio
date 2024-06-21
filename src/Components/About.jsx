import  {useEffect} from "react";
import { SiPostman } from "react-icons/si";
import project2 from "../assets/Project2.png";
import {DiJavascript1, DiReact, DiNodejsSmall, DiHtml5, DiCss3, DiBootstrap, DiGithubBadge} from "react-icons/di";
import { FaGitSquare } from "react-icons/fa";



const About = () => {
  return (
    <div
      className="glass max-w-[1000px] mt-24 mx-auto p-6 grid md:grid-cols-2 gap-8 place-items-center"
      id="about"
    >
      <div className="p-6">
        <h2 className="text-gray-200 text-3xl font-bold mb-4">Skills</h2>
        <p className="text-gray-300 mb-4">
        Proficient in MongoDB for database management, Express.js for server-side framework, React for front-end development, and Node.js for backend runtime.
        Experienced in building full-stack web applications with
        a strong focus on performance, scalability, and user experience. Skilled in RESTful APIs, authentication, and deployment processes.
        </p> 
        <div className="flex flex-wrap gap-4 text-4xl justify-center" >
          <DiHtml5 className="text-orange-600" />
          <DiCss3 className=" text-blue-600" />
          <DiBootstrap className=" text-purple-600" />
          <DiJavascript1 className=" text-yellow-500" />
          <DiReact className="text-blue-500" />
          <DiNodejsSmall className="text-green-500" />
          <DiGithubBadge className=" text-purple-600"/>
          <FaGitSquare className="text-orange-600"/>
          <SiPostman className="text-orange-600"/>
        </div>
      </div>
      <div className="relative group max-w-[600px]" >
        <div
          className="w-full h-full absolute -inset-1 bg-gradient-to-r from-purple-700 to-orange-900 rounded-lg
          blur opacity-25 group-hover:opacity-100 transition duration-300"
        ></div>
        <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg">
          <img
            className="rounded-lg md:max-w-[360px]"
            src={project2}
            alt="project1"
          />
        </div>
      </div>

      <div className="relative group order-2 md:order-1">
        <div
          className="w-full h-full absolute -inset-1 bg-gradient-to-r from-purple-700 to-orange-900 rounded-lg
          blur opacity-25 group-hover:opacity-100 transition duration-300"
        ></div>
        <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg">
          <img
            className="rounded-lg md:max-w-[360px]"
            src={project2}
            alt="project3"
          />
        </div>
      </div>

      <div className="p-6 order-1 md:order-2">
        <h2 className="text-gray-200 text-3xl font-bold mb-4">
          Frontend Experience
        </h2>
        <p className="text-gray-300 mb-4">
        Skilled in building dynamic and responsive user interfaces using React. Proficient in state management with Redux, hooks, and context API. Adept at implementing modern design principles, ensuring cross-browser compatibility, and optimizing performance. Experienced in integrating frontend with backend APIs and enhancing user experience.
        </p>
      </div>
      <div className="relative group order-1 md:order-2">
        <div
          className="w-full h-full absolute -inset-1 bg-gradient-to-r from-purple-700 to-orange-900 rounded-lg
          blur opacity-25 group-hover:opacity-100 transition duration-300"
        ></div>
        <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg">
          <img
            className="rounded-lg md:max-w-[360px]"
            src={project2
            }
            alt="project3"
          />
        </div>
      </div>
      <div className="p-6 order-2 md:order-1">
        <h2 className="text-gray-200 text-3xl font-bold mb-4">
          Backend Experience
        </h2>
        <p className="text-gray-300 mb-4">
        Skilled in developing robust and scalable backend solutions using Node.js and Express.js.
        Proficient in designing and implementing RESTful APIs, 
        managing databases with MongoDB, and ensuring data integrity and security. Experienced in user authentication, middleware, and deploying applications on cloud platforms.
        </p>
      </div>
    </div>
  );
};

export default About;
