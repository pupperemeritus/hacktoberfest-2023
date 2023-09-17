import About from "@/components/About";
import Contact from "@/components/Contact";

import Hero from "@/components/Hero";
import Mentors from "@/components/Mentors";
import Navbar from "@/components/Navbar";
import Sponsors from "@/components/Sponsors";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className=" spacer layer1">
        <Hero />
      </div>
      <div className="spacer layer2"></div>
      <div className=" bg-void w-full">
        <Timeline />
      </div>

      <div className=" spacer1 layer5 flex flex-col justify-center mb-12">
        <div>
          <Mentors />
          <Sponsors />
          <Contact />
        </div>
      </div>
      <section id="about">
        <About />
      </section>
    </main>
  );
}
