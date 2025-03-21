import ProjectDetail from "../components/ProjectDetail";
import page1 from "../assets/page1.png";
import page3 from "../assets/page3.png";
import page4 from "../assets/page4.png";
import page5 from "../assets/page5.png";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const stacks33 = [
  { text: "Angular", bgcolor: "bg-[#ff3a3a]/10", color: "text-[#ff3a3a]", icon: <FaNodeJs  /> },
  { text: "Typescript", bgcolor: "bg-[#5B6FB6]/10", color: "text-[#5B6FB6]", icon: <SiTypescript  /> },
  { text: "Sass", bgcolor: "bg-[#ff6ad5]/10", color: "text-[#ff6ad5]", icon: <FaSass  />  },
];

const stacksBarilo = [
  { text: "React", bgcolor: "bg-[#0091FF]/10", color: "text-[#0091FF]", icon: <FaReact  />   },
  { text: "Tailwind CSS", bgcolor: "bg-[#38BDF8]/10", color: "text-[#38BDF8]", icon: <RiTailwindCssFill  />  },
  { text: "Node.js", bgcolor: "bg-[#339933]/10", color: "text-[#339933]", icon: <FaNodeJs  />   },
  { text: "Java", bgcolor: "bg-[#999933]/10", color: "text-[#999933]", icon: <FaJava  />   },
];

const stacksCrypto = [
  { text: "React", bgcolor: "bg-[#0091FF]/10", color: "text-[#0091FF]", icon: <FaReact  />   },
  { text: "TypeScript", bgcolor: "bg-[#5B6FB6]/10", color: "text-[#5B6FB6]", icon: <SiTypescript  />   },
];

const stacksTranquiliza = [
  { text: "React", bgcolor: "bg-[#0091FF]/10", color: "text-[#0091FF]", icon: <FaReact  />   },
  { text: "JavaScript", bgcolor: "bg-[#F7DF1E]/10", color: "text-[#F7DF1E]", icon: <SiJavascript  />  },
  { text: "Tailwind CSS", bgcolor: "bg-[#38BDF8]/10", color: "text-[#38BDF8]", icon: <RiTailwindCssFill  />  },
  { text: "Node.js", bgcolor: "bg-[#339933]/10", color: "text-[#339933]", icon: <FaNodeJs  />   },
  { text: "Mongodb", bgcolor: "bg-[#789933]/10", color: "text-[#789933]", icon: <SiMongodb  />   },
];


const ProjectsDetail = () => {

  const navigate = useNavigate();

  const handleShowHome = () => {
    navigate(`/`);
  };

    return (
      <>
          <div className="flex flex-col px-2 md:px-24 2xl:px-72">
            <div className="flex flex-col items-center w-full my-12 slide-in-l">
              <h1 className="text-3xl text-center md:text-4xl lg:text-5xl">Some of my projects</h1>
              <p className="text-sm md:text-base mt-4 text-center text-[#b5b5b5]">Here you can find a collection of my public/open-source projects.</p>
              <p className="text-sm md:text-base text-center text-[#b5b5b5]">Feel free to explore and check them out!</p>
              <button className="group bg-[#8b99f8] hover:bg-[#8b99f8]/80 transition rounded-xl p-3 mt-4 items-center flex justify-center text-[#000000] text-[14px] cursor-pointer" 
                        onClick={() => handleShowHome()}><p className="pr-2 transition group-hover:-translate-x-1"><FaArrowLeftLong /></p>Back to Home</button>
            </div>
            <div className="flex flex-col w-full lg:flex-row slide-in-l"
            style={{ "--animation-duration": "0.8s" }}>
              <ProjectDetail title={"33 Inmortals"} 
                img={page1} 
                text={"Web app developed in Angular to promote the game 33 Immortals, showcasing its features and visuals to engage potential players. Built solo with a focus on performance and user experience."}
                featured={""}
                stacks={stacks33}
                href={"https://sergio-dannunzio.github.io/game-app/"}
                hrefCode={"https://github.com/Sergio-Dannunzio/game-app"}></ProjectDetail>
              <ProjectDetail title={"Bariló"}
               img={page3}
                text={"A web app that allows students to self-manage their trip to Bariloche, streamlining activity organization and management. Developed with React, TypeScript, and Tailwind CSS in a multidisciplinary team."}
                featured={""}
                stacks={stacksBarilo}
                isfeatured={true}
                href={"https://barilo.vercel.app/"}
                hrefCode={"https://github.com/IgrowkerTraining/i003-barilo-front"}></ProjectDetail>
            </div>
            <div className="flex flex-col lg:flex-row slide-in-l"
            style={{ "--animation-duration": "0.9s" }}>
              <ProjectDetail title={"Crypto market"} img={page4}
               text={"Web app developed in React and TypeScript that fetches real-time cryptocurrency prices from an API, providing users with up-to-date market data and trends. Built with a focus on performance and usability."}
               featured={""}
               stacks={stacksCrypto}
               href={"https://sergio-dannunzio.github.io/crypto-tracker.github.io/"}
               hrefCode={"https://github.com/Sergio-Dannunzio/crypto-tracker.github.io"}></ProjectDetail>
              <ProjectDetail title={"Tranquiliza 360°"} img={page5}
               text={"Fullstack web app designed to offer immersive wellness experiences tailored to therapeutic and emotional needs. Developed using React, Tailwind CSS, Node.js, Express.js, and MongoDB for a seamless and engaging user experience."}
               featured={""}
               stacks={stacksTranquiliza}
               isfeatured={true}
               href={"https://tranquiliza360-pps.vercel.app/"}
               hrefCode={"https://github.com/Sergio-Dannunzio/Tranquiliza360-PPS"}></ProjectDetail>
            </div>
          </div>
  
      </>
    );
  };
  
  export default ProjectsDetail;
  