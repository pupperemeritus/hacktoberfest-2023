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
