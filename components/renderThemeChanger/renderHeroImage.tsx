import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Image from "next/image";

const RenderHeroImage = () => {
  const { systemTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  if (!mounted) return null;

  if (currentTheme === "dark") {
    return (
      <Image src="/assets/hero_dark.png" alt="hero" width={150} height={0} />
    );
  } else {
    return (
      <Image src="/assets/hero_light.png" alt="hero" width={150} height={0} />
    );
  }
};

export default RenderHeroImage;
