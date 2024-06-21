import ProfilePic from "../assets/ProfilePic.png";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import {
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiMongodb,
} from "react-icons/di";
import { SiExpress, SiTypescript, SiTailwindcss } from "react-icons/si";

const downloadCV = () => {
  const link = document.createElement("a");
  link.href =
    "https://drive.google.com/uc?export=download&id=1A7k1F9AjX2duxwj6a2FXYM2h25QxNIZQ";
  link.download = "BASSAM CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Hero = () => {
  return (
    <div
      className="max-w-[1200px] mx-auto grid md:grid-cols-8 gap-12 p-10 md:p-5"
      id="home"
    >
      <div className="grid grid-cols-2 md:col-span-5 p-12 glass">
        <div className="my-auto ml-8 flex-col text-gray-200">
          <div className="flex items-center">
            <p className="text-4xl font-bold">
              Hi! I am Bassam
              <span> Full stack Web Developer</span>
            </p>
            <button
              className="ml-32 px-10 py-3 text-lg font-bold text-white bg-primary-color rounded-xl"
              onClick={downloadCV}
            >
              Download CV
            </button>
          </div>
        </div>
      </div>

      <div className="grid md:col-span-3 gap-6">
        <div className="text-5xl p-12 glass">
          <p className="text-gray-200 text-xl font-bold mb-4 text-center">
            My Tech Stack
          </p>
          <div className="grid grid-cols-4 gap-4">
            <DiHtml5 className="text-orange-600" />
            <DiCss3 className="text-blue-600" />
            <SiTailwindcss className="text-blue-600" />
            <DiBootstrap className="text-purple-600" />
            <DiJavascript1 className="text-yellow-500" />
            <DiReact className="text-blue-500" />
            <DiNodejsSmall className="text-green-500" />
            <DiMongodb className="text-green-500" />
            <SiExpress className="text-green-500" />
            <SiTypescript className="text-blue-600" />
          </div>
        </div>
        <div className="text-4xl gap-6 flex justify-center items-center glass text-gray-600">
          <a
            href="https://github.com/Lario11"
            className="hover:scale-100 transition-transform duration-300"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/bassam-bouatlaoui"
            className="hover:scale-100 transition-transform duration-300"
          >
            <AiFillLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
