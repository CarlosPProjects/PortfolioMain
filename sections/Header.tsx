import Link from "next/link";
import renderButton from "@/components/renderThemeChanger/renderButton";
import renderLogo from "@/components/renderThemeChanger/renderLogo";

const Header = () => {
  const navigations = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
  ];

  return (
    <header className="h-16 flex items-center justify-between">
      {renderLogo()}
      <ul className="flex gap-4 justify-center">
        {navigations.map((nav) => (
          <Link
            key={nav.label}
            href={nav.path}
            className="font-semibold text-gray-50 hover:text-gray-500"
          >
            {nav.label}
          </Link>
        ))}
      </ul>
      {renderButton()}
    </header>
  );
};

export default Header;
