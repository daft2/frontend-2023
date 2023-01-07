import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { NewsHomePage } from "./domains/news-home-page";
import { RockPaperScissors } from "./domains/rock-paper-scissors";

const PROJECT = [
  {
    title: "News Home Page",
    type: "Landing Page",
    thumbnail: "images\\news-home-page\\preview.jpg",
    path: "/news-home-page",
  },
  {
    title: "Rock Paper Scissors",
    type: "Game",
    thumbnail: "images\\rock-paper-scissors\\preview.jpg",
    path: "/rock-paper-scissors",
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
        </Routes>
      </div>
    </BrowserRouter>
  );
};

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex w-screen h-screen bg-neutral-900 justify-center items-center">
      <div className="flex gap-4">
        {PROJECT.map((item) => (
          <div
            onClick={() => navigate(item.path)}
            className="flex flex-col overflow-hidden max-w-md bg-[#121212] shadow ring-1 ring-white/10 p-2 rounded-xl gap-4 text-white/80 hover:text-white cursor-pointer hover:ring-white/50"
          >
            <img
              src={item.thumbnail}
              alt={`Project Thumbnail ${item.title}`}
              className="object-cover w-[15rem] h-[15rem] rounded-lg"
            />
            <div className="flex flex-col items-center">
              <span className="text-xl text- font-bold">{item.title}</span>
              <span>{item.type}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
