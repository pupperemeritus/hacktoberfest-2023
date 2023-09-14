import About from './about';
import Contact from './contact';
import Footer from './footer';
import Hero from './hero';
import Navbar from './navbar';
import Mentors from './mentors';
import Sponsors from './sponsors';
import Timeline from './timeline';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      <Hero />
      <Timeline />
      <Mentors />
      <Sponsors />
      <Contact />
      <About />
      <Footer />
    </main>
  );
}
