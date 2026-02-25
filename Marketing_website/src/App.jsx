import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import IndorePage from "./pages/IndorePage";
import CallButton from "./components/CallButton";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/digital-marketing-agency-in-indore"
          element={<IndorePage />}
        />
      </Routes>

      <CallButton />
    </Router>
  );
}