import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Mentors from "@/components/Mentors";
import Navbar from "@/components/Navbar";
import Sponsors from "@/components/Sponsors";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Navbar />
      <Hero />
      <Timeline />
      <Mentors />
      <Sponsors />
      <Contact />
      <section id="about">
        <About />
      </section>
      <Footer />
    </main>
  );
}
