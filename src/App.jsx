import "./i18n";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

const App = () => {
  return (
    <main className="bg-linear-to-br from-deep-space via-deep-space to-royal-purple">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
};
export default App;
