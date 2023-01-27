import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Button from "@/components/Button";
import { CiDark } from "react-icons/ci";
import { BsSun } from "react-icons/bs";

const RenderButton = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  if (currentTheme === "dark") {
    return (
      <Button onClick={() => setTheme("light")}>
        <BsSun size={18} />
      </Button>
    );
  } else {
    return (
      <Button onClick={() => setTheme("dark")}>
        <CiDark size={18} />
      </Button>
    );
  }
};

export default RenderButton;
