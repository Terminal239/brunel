import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FAQ />
        <Footer />
      </main>
    </>
  );
};

export default App;
