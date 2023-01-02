const NavigationOption = ["Home", "New", "Popular", "Trending", "Categories"];

const NewsSideContent = [
  {
    title: "Hydrogen VS Electric Cars",
    description: "Will gydrogen-fueled cars ever catch up to EVs?",
  },
  {
    title: "The Downside of AI Artistry",
    description:
      "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    title: "Is VC Funding Drying Up?",
    description:
      "Private funding by VC frims is down 50% YOY. We take a look at what that means.",
  },
];

const NewsBottomContent = [
  {
    title: "Reviving Retro PCs",
    description: "What happens when old PCs are given modern upgrades?",
    image: "src\\assets\\news-home-page\\image-retro-pcs.jpg",
  },
  {
    title: "Top 10 Laptops of 2022",
    description: "Our best picks for various needs and budgets.",
    image: "src\\assets\\news-home-page\\image-top-laptops.jpg",
  },
  {
    title: "The Growth of Gaming",
    description: "How the pandemic has sparked fresh opportunities.",
    image: "src\\assets\\news-home-page\\image-gaming-growth.jpg",
  },
];

const NewsHomePage = () => {
  return (
    <div className="flex bg-white text-nhpDarkGrayishBlue p-6 md:p-12 font-inter text-[15px]">
      {/* Navbar */}
      <div className="flex justify-between items-center w-full">
        <div className="w-8 overflow-hidden">
          <img src="src/assets/news-home-page/logo.svg" alt="Logo" />
        </div>
        <div className="w-8 overflow-hidden md:hidden">
          <img src="src\assets\news-home-page\icon-menu.svg" alt="Icon Menu" />
        </div>
        <div className="hidden md:flex gap-8">
          {NavigationOption.map((option) => (
            <span className="cursor-pointer hover:text-nhpSoftRed">
              {option}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

{
}
export default NewsHomePage;
