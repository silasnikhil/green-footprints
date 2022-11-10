import { Route, Routes } from "react-router";
import "./App.css";
import ColorTabs from "./pages/Dashboard";
import Landing from "./pages/Landing";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<ColorTabs />} />
      </Routes>
    </div>
  );
}

export default App;
