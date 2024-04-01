import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./styles/app.scss"
import Home from "./components/Home";
import Program from "./components/Program";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/program" element={<Program />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;