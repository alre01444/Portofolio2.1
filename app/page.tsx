import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/about";
import Journey from "../components/Journey";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">
    <Navbar />
<Hero />
<About />
<Skills />
<Journey />
<Projects />
<Contact />
    </main>
  );
}