import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { AboutMe } from "@/components/about-me";
import { TechnicalArsenal } from "@/components/technical-arsenal";
import { SelectedWorks } from "@/components/selected-works";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[1400px] flex-col gap-4">
      <Navbar />
      <Hero />
      <AboutMe />
      <TechnicalArsenal />
      <SelectedWorks />
    </div>
  );
}
