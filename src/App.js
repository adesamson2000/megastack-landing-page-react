import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import OurWork from "./Pages/OurWork";
import Contact from "./Pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/work" element={<OurWork />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    // <div>
    //   <NavBar />
    //   <Header />
    //   <Process />
    //   <Product />
    //   <Footer />
    // </div>
  );
}

export default App;
