import { motion } from "framer-motion";
import { useState } from "react";
import { SlMagnifier } from "react-icons/sl";
import Link from "next/link";
import { BsArrowReturnLeft } from "react-icons/bs";

const projects = [
  {
    key: "01",
    name: "Noviembre La Iruela",
    info: "This website project for a client's rural house in the Sierra de Jaén offers peace and connection with nature. It was built using Wordpress and the visual page builder Divi to achieve an attractive and user-friendly design for travelers.",
    route: "http://noviembrelairuela.es/",
  },
  {
    
    key: "02",
    name: "Diverfy",
    info: "This eCommerce platform, built with WordPress, allows brands to sell their products at exclusive prices promoted by influencers. Users have a smooth and secure experience with various payment and shipping options. The platform, built with only WordPress, has been successful in increasing sales and generating traffic.",
    route: "https://diverfy.com/",
  },
  {
    key: "03",
    name: "SoyunGourmet",
    info: "This project is a basket selling platform, built with WordPress. We offer a wide variety of customized baskets, filled with fresh and high-quality products. The website is designed with an user-friendly interface and a secure checkout process. WordPress was used to develop and manage the site, allowing for efficient updates and new product additions.",
    route: "https://soyungourmet.com/",
  },
  {
    key: "04",
    name: "Todo-App",
    info: "In development, Todo-App is a mobile app designed to improve productivity and stay organized. Users can create task lists, shopping lists, set reminders and track progress in real-time. Easy to use and highly customizable, it allows users to sync with their calendar and set reminders based on location.",
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
    <section className="grid grid-cols-3 max-lg:grid-cols-1 max-lg:grid-rows-2 gap-20">
      <div className="col-span-2 max-lg:col-span-1">
        {staticTextVisible && (
          <motion.div
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.8, ease: "easeIn" }}
            className="h-80 max-w-lg"
          >
            <h1 className="text-8xl font-bold mb-8 max-sm:text-6xl">Welcome</h1>
            <div className="pl-8 border-l-2 border-black dark:border-gray-50">
              <p>
                I'm a full stack junior developer based in Valencia, Spain. I
                specialize in creating minimalistic and intuitive UI/UX designs
                for e-commerce websites and blogs.
              </p>
              <br />
              <p>
                My experience in Next.js, TypeScript, Tailwind CSS and UI/UX
                design allows me to deliver high quality and easy to use digital
                products.
              </p>
            </div>
          </motion.div>
        )}
        {elementsVisible && (
          <motion.div
            key={currentElement?.key}
            animate={{ translateX: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.3, ease: "easeIn" }}
            className="h-80 max-w-lg"
          >
            <div className="flex row gap-2">
              <h1 className="text-4xl font-bold mb-8">
                {currentElement?.name}{" "}
              </h1>

              <Link
                href={`${currentElement?.route}`}
                target="_blank"
                className="h-fit"
              >
                <SlMagnifier />
              </Link>
            </div>
            <div className="pl-8 border-l-2 border-black dark:border-gray-50">
              <p>{currentElement?.info}</p>
            </div>
          </motion.div>
        )}
      </div>
      <div className="max-lg:col-span-1">
        <h2 className="text-3xl mb-8">Projects</h2>
        <div className="w-20 h-20 p-8 border-black dark:border-gray-300 border-l-2 border-t-2 rounded-tl-lg relative">
          <div className="absolute grid gap-2">
            {projects.map((project) => (
              <motion.div
                key={project.key}
                whileHover={{ translateX: 5, transition: { duration: 0.3 } }}
                className="cursor-pointer"
              >
                <h1
                  onClick={() => handleClick(project.key)}
                  className="border-black dark:border-gray-300 border-b w-fit"
                >
                  {project.name}
                </h1>
              </motion.div>
            ))}
            <BsArrowReturnLeft
              size={18}
              onClick={handleHomeClick}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
