import Link from "next/link";
import RenderButton from "@/components/renderThemeChanger/RenderButton";
import RenderLogo from "@/components/renderThemeChanger/RenderLogo";

const Header = () => {
  const navigations = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
  ];

  return (
    <header className="h-16 flex items-center justify-between">
      {RenderLogo()}
      <ul className="flex gap-4 justify-center">
        {navigations.map((nav) => (
          <Link
            key={nav.label}
            href={nav.path}
            className="font-semibold text-gray-50 hover:text-gray-500 dark:text-black"
          >
            {nav.label}
          </Link>
        ))}
      </ul>
      {RenderButton()}
    </header>
  );
};

export default Header;
