import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    key: "01",
    name: "Diverfy",
    info: ["Wordpress", "CSS", "HTML5", "PHP"],
    route: "#",
  },
  {
    key: "02",
    name: "CheckTask",
    info: ["Wordpress", "CSS", "HTML5", "PHP"],
    route: "#",
  },
  {
    key: "03",
    name: "SoyunGourmet",
    info: ["Wordpress", "CSS", "HTML5", "PHP"],
    route: "#",
  },
];

const Hero = () => {
  const [currentProject, setCurrentProject] = useState(projects[0].key);
  const [staticTextVisible, setStaticTextVisible] = useState(true);
  const [elementsVisible, setElementsVisible] = useState(false);
  const currentElement = projects.find((el) => el.key === currentProject);

  const handleClick = (key: string) => {
    setCurrentProject(key);
    setStaticTextVisible(false);
    setElementsVisible(true);
  };

  const handleHomeClick = () => {
    setStaticTextVisible(true);
    setElementsVisible(false);
  };

  return (
    // <section className="flex flex-row max-md:flex-col gap-20">
    <section className="grid grid-cols-3 max-lg:grid-cols-1 max-lg:grid-rows-2 gap-20 max-sm:gap-10">
      <div className="col-span-2 max-lg:col-span-1">
        {staticTextVisible && (
          <div className="h-80 max-w-md">
            <h1 className="text-8xl font-bold mb-8 max-sm:text-6xl">Welcome</h1>
            <div className="pl-8 border-l-2 border-black dark:border-gray-50">
              <p>
                My name is Ian Carlos, I'm a front-end developer based in
                Torquay, Devon, UK. I have developed many types of front-ends
                from well know DJ applications to Ecommerce booking platforms.
              </p>
              <br />
              <p>
                I'm passionate about cutting-edge, pixel-perfect, beautiful
                interfaces and intuitively implemented UX.
              </p>
            </div>
          </div>
        )}
        {elementsVisible && (
          <div className="h-80 max-w-md grid place-content-center">
            <Image src={"/assets/project.png"} alt="" width={570} height={0}></Image>
          </div>
        )}
      </div>
      <div className="max-lg:col-span-1 relative">
        <h2 className="text-4xl mb-8">Projects</h2>
        <span onClick={handleHomeClick}>home</span>
        <div className="w-24 h-24 p-8 border-black dark:border-gray-50 border-l-2 border-t-2 rounded-tl-lg">
          <div className="absolute grid gap-2">
            {projects.map((project) => (
              <motion.div
                key={project.key}
                whileHover={{ translateX: 5, transition: { duration: 0.3 } }}
                className="cursor-pointer"
              >
                <h1
                  onClick={() => handleClick(project.key)}
                  className="border-black dark:border-white border-b w-fit shadow-xl"
                >
                  {project.name}
                </h1>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
