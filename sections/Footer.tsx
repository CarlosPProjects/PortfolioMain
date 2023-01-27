import {
  SlSocialLinkedin,
  SlSocialInstagram,
  SlSocialGithub,
} from "react-icons/sl";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center dark:text-gray-50 text-sm">
      <div>
        &copy;
        {new Date().getFullYear()}
        <span className="ml-1">All Rights Reserved</span>
      </div>
      <div className="flex items-center gap-2">
        <SlSocialLinkedin size={18} className="cursor-pointer" />
        <SlSocialGithub size={18} className="cursor-pointer" />
        <SlSocialInstagram size={18} className="cursor-pointer" />
        <div className="w-12 border-black dark:border-gray-100 border-b-2 max-sm:hidden"></div>
      </div>
    </footer>
  );
};

export default Footer;
