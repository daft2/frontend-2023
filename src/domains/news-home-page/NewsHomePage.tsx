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
    <div className="flex flex-col gap-4 bg-white text-nhpDarkGrayishBlue p-6 md:p-12 font-inter text-[15px]">
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
      {/* Content */}
      <div className="flex flex-col gap-4">
        <img
          src="src\assets\news-home-page\image-web-3-mobile.jpg"
          alt="Image Web 3 Mobile"
        />
        <span className="text-4xl font-extrabold text-nhpVeryDarkBlue">
          The Bright Future of Web 3.0?
        </span>
        <p className="text-nhpDarkGrayishBlue">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button className="tracking-widest py-3 px-8 w-fit bg-nhpSoftRed text-nhpOffWhite text-xs">
          READ MORE
        </button>
      </div>
    </div>
  );
};

{
}
export default NewsHomePage;
