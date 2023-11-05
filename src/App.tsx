import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Hotels from "./components/Hotels";
import About from "./components/About";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import BackToTopBtn from "./components/BackToTopBtn";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <main className="max-w-[1920px] bg-white mx-auto relative overflow-hidden">
      <Header />
      <Hero />
      <Hotels />
      <About />
      <Testimonial />
      <Cta />
      <Footer />
      <BackToTopBtn />
    </main>
  );
}

export default App;
