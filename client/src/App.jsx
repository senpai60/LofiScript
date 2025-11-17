import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";

import HomePage from "./pages/HomePage";
import ProblemPage from "./pages/ProblemPage";
import AboutPage from "./pages/AboutPage";
import QuestionPage from "./pages/QuestionPage";

function App() {
  return (
    <div className="inter flex w-full min-h-screen bg-(--bg-main)">
      
      {/* LEFT SIDEBAR */}
      <Sidebar />

      {/* RIGHT MAIN CONTENT */}
      <main className="flex-1 p-10 overflow-y-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/problems" element={<ProblemPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/quests" element={<QuestionPage />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;
