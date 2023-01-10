import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Calculator } from "./domains/calculator";
import { NewsHomePage } from "./domains/news-home-page";
import { RockPaperScissors } from "./domains/rock-paper-scissors";

const PROJECT = [
  {
    title: "News Home Page",
    type: "Landing Page",
    thumbnail: "images/news-home-page/preview.jpg",
    path: "/news-home-page",
  },
  {
    title: "Rock Paper Scissors",
    type: "Game",
    thumbnail: "images/rock-paper-scissors/preview.jpg",
    path: "/rock-paper-scissors",
  },
  {
    title: "Calculator",
    type: "App",
    thumbnail: "images/calculator/preview.webp",
    path: "/calculator",
  },
];

const App = () => {
  return (
    <BrowserRouter>
      {/* Layout */}
      <div className="text-stone-100 overflow-hidden">
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/news-home-page" element={<NewsHomePage />} />
          <Route path="/rock-paper-scissors" element={<RockPaperScissors />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex w-screen h-screen bg-neutral-900 p-4 justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 h-fit">
        {PROJECT.map((item) => (
          <div
            onClick={() => navigate(item.path)}
            className="flex flex-col overflow-hidden bg-[#121212] h-fit shadow ring-1 ring-white/10 p-2 rounded-xl gap-4 text-white/80 hover:text-white cursor-pointer hover:ring-white/50"
          >
            <img
              src={item.thumbnail}
              alt={`Project Thumbnail ${item.title}`}
              className="object-cover w-[15rem] h-[15rem] rounded-lg"
            />
            <div className="flex flex-col items-center">
              <span className="text-xl font-bold">{item.title}</span>
              <span>{item.type}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
