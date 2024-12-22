import Download from "./sections/Download";
import Fag from "./sections/Faq";
import Features from "./sections/Features";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Pricing from "./sections/Pricing";
import Testimonials from "./sections/Testimonials";

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing/>
      <Fag/>
      <Testimonials/>
      <Download/>
    </main>
  );
};

export default App;
