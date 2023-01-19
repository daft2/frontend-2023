import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Calculator } from "./domains/calculator";
import { IpAddressTracker } from "./domains/ip-address-tracker";
import { NewsHomePage } from "./domains/news-home-page";
import { RockPaperScissors } from "./domains/rock-paper-scissors";

const PROJECT = [
  {
    title: "News Home Page",
    type: "Landing Page",
    thumbnail: "images/news-home-page/preview.jpg",
    path: "/news-home-page",
    completed: true,
  },
  {
    title: "Rock Paper Scissors",
    type: "Game",
    thumbnail: "images/rock-paper-scissors/preview.jpg",
    path: "/rock-paper-scissors",
    completed: true,
  },
  {
    title: "Calculator",
    type: "App",
    thumbnail: "images/calculator/preview.webp",
    path: "/calculator",
    completed: true,
  },
  {
    title: "IP Address Tracker",
    type: "App",
    thumbnail: "images/ip-address-tracker/preview.jpg",
    path: "/ip-address-tracker",
    completed: false,
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
          <Route path="/ip-address-tracker" element={<IpAddressTracker />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen bg-[url('/images/graph-paper.svg')] bg-stone-900 p-4 overflow-x-hidden font-inter">
      <div className="max-w-3xl my-12 mx-8 lg:mx-auto">
        <div className="bg-black/20 shadow-lg rounded-lg overflow-hidden p-6 my-4">
          <span className="text-3xl font-semibold">
            Frontend Mentor Challenge
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 h-fit">
          {PROJECT.map((item) => (
            <div
              onClick={() => navigate(item.path)}
              className="flex flex-col items-center overflow-hidden bg-neutral-800 border border-neutral-700 h-fit p-2 rounded-xl gap-4 cursor-pointer hover:scale-105 hover:ease-in-out duration-150"
            >
              <div className="w-full relative">
                <img
                  src={item.thumbnail}
                  alt={`Project Thumbnail ${item.title}`}
                  className="object-cover w-full h-[15rem] rounded-lg"
                />
                {!item.completed && (
                  <span className="absolute bg-yellow-500/80 font-bold px-2 rounded-full text-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    Work in progress
                  </span>
                )}
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xl font-bold">{item.title}</span>
                <span>{item.type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
