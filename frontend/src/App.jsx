import { Routes, Route } from "react-router-dom";
import { IMAGES } from "./constants/images";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  return (
    <>
      {/* Background Image with Overlay */}
      <div
        className="site-background"
        style={{ backgroundImage: `url(${IMAGES.background})` }}
      />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
