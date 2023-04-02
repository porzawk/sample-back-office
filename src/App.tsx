import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./containers/Dashboard";

function App() {
  document.title = "Simple Back Office";
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <div className="bg-[#F4F7FE] pt-[47px] pl-[223px] h-screen overflow-auto">
          <div className="px-9 py-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
