import Button from "@/components/Button";
import RenderHeroImage from "@/components/RenderHeroImage";
import { motion } from "framer-motion";

import {
  TbBrandNextjs,
  TbBrandJavascript,
  TbBrandTailwind,
  TbBrandVisualStudio,
  TbBrandCss3,
  TbBrandGithub,
  TbBrandFramer,
  TbBrandHtml5,
  TbBrandPhp,
} from "react-icons/tb";
import { SiThreedotjs, SiBrave, SiPrisma } from "react-icons/si";

const Hero = () => {
  return (
    <section>
      <div className="flex justify-center pb-10 pt-10 dark:text-white text-black">
        <div className="absolute w-36 justify-center items-center flex">
          <motion.span
            className="absolute left-0"
            animate={{
              type: "spring",
              translateY: [0, 10, 0],
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            <TbBrandNextjs size={25} />
          </motion.span>
          <motion.span
            className="absolute right-0"
            animate={{
              type: "spring",
              translateY: [0, 10, 0],
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
              
            }}
          >
            <TbBrandJavascript size={25} />
          </motion.span>
          <motion.span
            className="absolute -top-10"
            animate={{
              type: "spring",
              translateY: [0, 10, 0],
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
             
            }}
          >
            <TbBrandTailwind size={25} />
          </motion.span>
          <motion.span
            className="absolute -top-8 right-6"
            animate={{
              type: "spring",
              translateY: [0, 10, 0],
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
             
            }}
          >
            <TbBrandFramer size={25} />
          </motion.span>
          <motion.span
            className="absolute -top-8 left-6"
            animate={{
              type: "spring",
              translateY: [0, 10, 0],
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,

            }}
          >
            <TbBrandGithub size={25} />
          </motion.span>
        </div>
        {RenderHeroImage()}
      </div>

      <h1 className="text-7xl font-bold">
        Hi I'm <span className="dark:text-[#4c4138] ">Carlos</span>
      </h1>
      <h3 className="text-4xl my-3">I am Web Designer</h3>
      <p className="text-gray-700 mb-8 dark:text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid et
        iusto a tenetur quaerat nobis nesciunt ex laborum, sequi quae quis
        facilis, assumenda saepe quibusdam vero animi fugiat, aliquam facere.
      </p>
      <Button
        className="bg-purple-600 text-white px-6"
        onClick={() => {
          console.log("Waitig for a function");
        }}
      >
        Hire Me!
      </Button>
    </section>
  );
};

export default Hero;
