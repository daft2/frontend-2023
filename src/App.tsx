import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NewsHomePage } from "./domains/news-home-page";
import { RockPaperScissors } from "./domains/rock-paper-scissors";

const App = () => {
  return (
    <BrowserRouter>
      {/* Layout */}
      <div className="bg-slate-900 text-stone-100 overflow-hidden">
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/news-home-page" element={<NewsHomePage />} />
          <Route path="/rock-paper-scissors" element={<RockPaperScissors />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

const Homepage = () => (
  <div className="flex justify-center">
    <h1 className="text-2xl">Homepage</h1>
  </div>
);

export default App;
