import { Hero } from "@/components/hero";
import { LogoCloud } from "@/components/logo-cloud";
import ModeToggle from "@/components/mode-toggle";


export default function Home() {
  return (
    <div className="min-h-screen font-display">
      <ModeToggle />
      <Hero />
      <LogoCloud />




    </div>
  );
}
