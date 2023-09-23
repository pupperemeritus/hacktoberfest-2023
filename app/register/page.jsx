"use client"
import Form from "@/components/Form";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className=" spacer2 layer6 w-full">
      <Form />
      <section id="about">
        <About />
      </section>
    </main>
  );
}
