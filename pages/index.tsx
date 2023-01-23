import { Inter } from "@next/font/google";
import Hero from "@/sections/Hero";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Hero></Hero>
    </div>
  );
}
