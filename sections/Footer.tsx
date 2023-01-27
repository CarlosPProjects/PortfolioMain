import { SlEnvolope } from "react-icons/sl";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center dark:text-gray-50 text-sm max-sm:pb-8">
      <div>
        &copy;
        {new Date().getFullYear()}
        <span className="ml-1">All Rights Reserved</span>
      </div>

      <Link href={"mailto:cg.fullstackdev@gmail.com?subject=Asunto&body=Mensaje"}>
        <SlEnvolope size={20} className="cursor-pointer" />
      </Link>
    </footer>
  );
};

export default Footer;
