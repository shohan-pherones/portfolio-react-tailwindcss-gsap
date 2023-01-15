import { HashLink } from "react-router-hash-link";
import Anchor from "./Anchor";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="hero container mx-auto py-20 w-full h-[calc(100vh-5rem)] flex gap-20 items-center">
      <div className="hero-left flex-1 flex flex-col gap-3">
        <span>Hi, my name is</span>
        <h1 className="text-7xl font-bold">
          Sunerah Binte Ayesha<span className="text-cyan-500">.</span>
        </h1>
        <span className="text-7xl text-gray-400 font-light">
          MERN Stack Developer based in Bangladesh.
        </span>
        <p>
          I build iteractive and exceptional{" "}
          <a
            href="https://www.ibm.com/topics/digital-experience"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-500 link-item after:bg-cyan-500"
          >
            digital experiences
          </a>{" "}
          for the modern era. Currently, I’m focused on building accessible,
          human-centered projects using{" "}
          <a
            href="https://www.mongodb.com/mern-stack"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-500 link-item after:bg-cyan-500"
          >
            MERN Stack
          </a>{" "}
          with various{" "}
          <a
            href="https://en.wikipedia.org/wiki/JavaScript"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-500 link-item after:bg-cyan-500"
          >
            JavaScript
          </a>{" "}
          libraries.
        </p>
        <div className="hero-btns flex items-center gap-10 mt-5">
          <Anchor href="https://www.google.com" text="View My Resume" />
          <HashLink to="#contact" className="flex items-center gap-2 group">
            Say Hi{" "}
            <span className="group-hover:translate-x-3 ease-in-out duration-300">
              <BsArrowRight />
            </span>
          </HashLink>
        </div>
      </div>
      <div className="hero-right flex-1 w-full h-full relative">
        <div className="hero-img w-1/2 h-2/3 overflow-hidden rounded-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]">
          <img
            src="https://images.pexels.com/photos/1628241/pexels-photo-1628241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Woman Leaning On Fence"
            className="w-full h-full object-cover grayscale brightness-90"
          />
        </div>
        <span className="w-1/2 h-2/3 rounded-xl border absolute top-1/2 left-1/2 -translate-x-[60%] -translate-y-[40%]"></span>
      </div>
    </div>
  );
};

export default Hero;
