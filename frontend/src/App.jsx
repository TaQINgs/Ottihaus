import { Routes, Route } from "react-router-dom";
import { IMAGES } from "./constants/images";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import CustomCursor from "./components/CustomCursor";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Location from "./pages/Location";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <CustomCursor />

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
          <Route path="/menu" element={<Menu />} />
          <Route path="/location" element={<Location />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
