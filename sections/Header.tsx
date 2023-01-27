import RenderButton from "@/components/RenderButton";
import { SlCup } from "react-icons/sl";

const Header = () => {
  const navigations = [
    { label: "Home", path: "/" },
    { label: "Projects", path: "/projects" },
  ];

  return (
    <header className="h-16 flex items-center justify-between">
      <SlCup size={35} />
      {RenderButton()}
    </header>
  );
};

export default Header;
