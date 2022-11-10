import { Route, Routes } from "react-router";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Usecase from "./pages/Usecase";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/usecase" element={<Usecase />} />
      </Routes>
    </div>
  );
}

export default App;
