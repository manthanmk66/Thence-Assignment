import logo from "./logo.svg";
import "./App.css";

import HeroSection from "./components/herosection";
import Submission from "./pages/submission";

import Signup from "../src/pages/signup"; // Assuming the correct path
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/submission" element={<Submission />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
