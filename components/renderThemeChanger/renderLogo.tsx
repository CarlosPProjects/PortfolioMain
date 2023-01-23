import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Image from "next/image";

const renderLogo = () => {
  const { systemTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  if (currentTheme === "dark") {
    return (
      <Image
        src={"/llama.png"}
        alt={"logo"}
        width={35}
        height={25}
        className="invert"
      />
    );
  } else {
    return <Image src={"/llama.png"} alt={"logo"} width={35} height={25} />;
  }
};

export default renderLogo;
