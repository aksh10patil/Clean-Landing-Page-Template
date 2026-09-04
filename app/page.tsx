import { Features } from "@/components/features";
import { FeaturesSecoundary } from "@/components/ui/features-secoundary";
import { FeaturesThird } from "@/components/ui/features-third";
import { Hero } from "@/components/ui/hero";
import { LogoCloud } from "@/components/ui/logo-cloud";
import { Speed } from "@/components/ui/speed";


export default function Home() {
  return (
    <div className="min-h-screen font-display">
      <Hero />
      <LogoCloud />
      <Features />
      <Speed />
      <FeaturesSecoundary />
      <FeaturesThird />




    </div>
  );
}
