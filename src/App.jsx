import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <Router>
      <div className="flex justify-center items-center flex-col">
        <Navbar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="about" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
