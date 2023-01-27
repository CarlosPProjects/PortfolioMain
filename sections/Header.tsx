import RenderButton from "@/components/RenderButton";
import { SlCup } from "react-icons/sl";
import Link from "next/link";
const Header = () => {

  return (
    <header className="h-16 flex items-center justify-between">
      <Link href={"/"}>
        <SlCup size={35} />
      </Link>
      {RenderButton()}
    </header>
  );
};

export default Header;
