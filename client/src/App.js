import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import HeroSection from "./components/herosection";
import AMASection from "./components/amasection";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AMASection />
      <Footer />
    </div>
  );
}

export default App;
