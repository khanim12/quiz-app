import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Quiz from "./pages/Quiz";
import Introduced from "./pages/Introduced";
import Port from "./pages/Port";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Introduced />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/port" element={<Port />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
