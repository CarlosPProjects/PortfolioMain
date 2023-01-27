import { motion } from "framer-motion";

const Hero = () => {
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
      key: "02",
      name: "SoyunGourmet",
      info: ["Wordpress", "CSS", "HTML5", "PHP"],
      route: "#",
    },
  ];

  return (
    <section className="grid grid-cols-10 gap-20">
      <div className="col-span-6">
        <h1 className="text-8xl font-bold mb-8">Welcome</h1>
        <div className="pl-8 border-l-2 border-black dark:border-gray-50">
          <p>
            My name is Ian Dunkerley, I'm a front-end developer based in
            Torquay, Devon, UK. I have developed many types of front-ends from
            well know DJ applications to Ecommerce booking platforms.
          </p>
          <br />
          <p>
            I'm passionate about cutting-edge, pixel-perfect, beautiful
            interfaces and intuitively implemented UX.
          </p>
        </div>
      </div>
      <div className="col-span-4 relative">
        <h2 className="text-4xl mb-8">Projects</h2>
        <div className="w-24 h-24 p-8 border-black dark:border-gray-50 border-l-2 border-t-2 rounded-tl-lg">
          <div className="absolute grid gap-2">
            {projects.map((project) => (
              <motion.div
                key={project.key}
                whileHover={{ translateX: 5, transition: { duration: 0.3 } }}
                className="cursor-pointer"
              >
                <h1 className="border-black dark:border-white border-b w-fit shadow-xl">
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
