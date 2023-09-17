import Form from "@/components/Form";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Footer from "@/components/Footer";
export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Form />
            <section id="about">
                <About />
            </section>
        </main>
    );
}
