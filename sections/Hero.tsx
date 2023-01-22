import Button from "@/components/Button";

const Hero = () => {
  return (
    <section>
      <h1 className="text-7xl font-bold">
        Hi I'm <span className="dark:text-purple-600">Carlos</span>
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
