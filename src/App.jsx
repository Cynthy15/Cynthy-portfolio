import Navbar       from "./components/Navbar";
import Hero         from "./components/Hero";
import Services     from "./components/Services";
import About        from "./components/About";
import Projects     from "./components/Projects";
import Contact      from "./components/Contact";
import Footer       from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  return (
    <div className="min-h-screen bg-navy-950 text-sky-200">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
