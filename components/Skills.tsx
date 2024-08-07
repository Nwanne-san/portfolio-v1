import { HiChip, HiBadgeCheck } from "react-icons/hi";
import Image from "next/image";
import profile from "../public/profile.jpg";
import skills from "../data/skills";

const Skills: React.FC = () => {
  return (
    <div>
      <div className="mx-auto bg-gradient-to-b block md:hidden mt-4 from-teal-500 rounded-full w-64 h-64 relative overflow-hidden hover:transform hover:scale-110 hover:duration-300 hover:ease-in md:h-96 md:w-96">
        <Image src={profile} alt="A photo of me" layout="fill" objectFit="cover" />
      </div>
      <div className="flex flex-col text-center items-center justify-center mt-10 lg:mt-20 pb-7">
        <HiChip className="text-teal-600 text-6xl mb-4" />
        <h1 className="dark:text-white text-teal-600 text-4xl mb-2">
          Skills &amp; Technologies
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 md:gap-20 justify-center items-center">
        <div className="bg-gradient-to-b hidden md:block mt-20 lg:mt-0 from-teal-500 rounded-full w-64 h-64 relative overflow-hidden hover:transform hover:scale-110 hover:duration-300 hover:ease-in md:h-96 md:w-96">
          <Image
            src={profile}
            alt="A photo of me"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div>
          <div className="text-center md:text-left">
            <span className="dark:text-white text-gray-500 text-lg">
              Programming Languages{" "}
            </span>
          </div>
          <div className="text-sm my-2 mb-4 text-white grid grid-cols-2 grid-rows-3 md:grid-rows-2 md:grid-cols-3 gap-2 md:min-w-[450px]">
            {skills.slice(0, 6).map((skill) => (
              <div
                key={skill.id}
                className="flex justify-center p-2 text-center bg-teal-600 items-center text-sm hover:cursor-pointer transition duration-500 ease-in-out"
              >
                <HiBadgeCheck className="w-4 h-4 flex-shrink-0 mr-1 hover:text-white" />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
          <div className="text-center md:text-left">
            <span className="dark:text-white text-gray-500 text-lg">
              Web Technologies{" "}
            </span>
          </div>
          <div className="text-sm my-2 mb-4 text-white grid grid-cols-2 grid-rows-3 md:grid-rows-2 md:grid-cols-3 gap-2 md:min-w-[450px]">
            {skills.slice(7, 15).map((skill) => (
              <div
                key={skill.id}
                className="flex justify-center p-2 text-center bg-teal-600 items-center text-sm hover:cursor-pointer transition duration-500 ease-in-out"
              >
                <HiBadgeCheck className="w-4 h-4 flex-shrink-0 mr-1 hover:text-white" />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
