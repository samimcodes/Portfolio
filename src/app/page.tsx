import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Skills from "@/components/Skills";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackgroundAnimation from "@/components/BackgroundAnimation";

export default function Home() {
  return (
    <>
      <BackgroundAnimation />
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Services />
        <Process />
        <Skills />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
