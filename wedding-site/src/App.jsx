import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
//import RSVP from "./pages/Rsvp.jsx";<Route path="/rsvp" element={<RSVP />} />
import TravelStay from "./pages/TravelStay.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path ="/travel&stay" element={<TravelStay />}/>
      </Routes>
    </Router>
  );
}
