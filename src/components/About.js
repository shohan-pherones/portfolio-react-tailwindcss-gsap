import SectionTitle from "./SectionTitle";
import Anchor from "./Anchor";

const About = () => {
  return (
    <div className="about container mx-auto py-20" id="about">
      <SectionTitle title="About me" />
      <div className="about-wrapper flex gap-20 items-center">
        <div className="about-left flex-1 flex justify-center relative">
          <div className="about-img w-[20rem] h-[20rem] rounded-xl overflow-hidden z-[1]">
            <img
              src="https://images.pexels.com/photos/14318107/pexels-photo-14318107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Woman in White Coat Standing Near Red Curtain"
              className="w-full h-full object-cover grayscale brightness-90"
            />
          </div>
          <span className="absolute w-[20rem] h-[20rem] border rounded-xl top-[10%] left-[24%]"></span>
        </div>
        <div className="about-right flex-1 flex flex-col items-start gap-3">
          <p>
            As a full-stack developer with experience in the MERN stack
            (MongoDB, Express.js, React, and Node.js), I have a strong
            understanding of both front-end and back-end development. I am
            skilled in developing and designing responsive web applications that
            are optimized for user experience. I have experience working with
            various libraries and frameworks such as Redux, Material-UI, and
            Bootstrap.
          </p>
          <p>
            In addition to my technical skills, I am also highly organized and
            efficient when it comes to project management. I have experience
            working in Agile development teams and am comfortable using tools
            such as Trello and GitHub to manage tasks and collaborate with team
            members.
          </p>
          <Anchor
            href="https://www.google.com"
            text="View My Resume"
            needMargin
          />
        </div>
      </div>
    </div>
  );
};

export default About;
