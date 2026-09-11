import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import RSVP from "./pages/Rsvp.jsx";
import TravelStay from "./pages/TravelStay.jsx";
import FAQ from "./pages/FAQ.jsx";
import ScrollToTop from "./components/ScrollToTop";


export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path ="/travel-stay" element={<TravelStay />}/>
        <Route path ="/qa" element= {<FAQ />}/>
        <Route path="/rsvp" element={<RSVP />} />
      </Routes>
    </Router> 
  );
}
