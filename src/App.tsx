import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NewsHomePage } from "./domains/news-home-page";

const App = () => {
  return (
    <BrowserRouter>
      {/* Layout */}
      <div className="w-screen h-screen bg-slate-900 text-stone-100">
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/news-home-page" element={<NewsHomePage />} />
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
