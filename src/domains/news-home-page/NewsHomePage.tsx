import { useState } from "react";

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
    image: "images//news-home-page//image-retro-pcs.jpg",
  },
  {
    title: "Top 10 Laptops of 2022",
    description: "Our best picks for various needs and budgets.",
    image: "images//news-home-page//image-top-laptops.jpg",
  },
  {
    title: "The Growth of Gaming",
    description: "How the pandemic has sparked fresh opportunities.",
    image: "images//news-home-page//image-gaming-growth.jpg",
  },
];

const NewsHomePage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <div className="relative">
      {isDrawerOpen && (
        <>
          <div
            className="absolute bg-slate-900/40 w-full h-full"
            onClick={handleDrawer}
          ></div>
          <div className="absolute bg-white w-3/4 h-full right-0 flex flex-col p-6">
            <div className="flex justify-end">
              <img
                src="images/news-home-page/icon-menu-close.svg"
                alt="Icon Close Menu Mobile"
                onClick={handleDrawer}
              />
            </div>
            <div className="flex flex-col text-nhpVeryDarkBlue font-semibold text-lg pt-12 gap-6">
              {NavigationOption.map((option) => (
                <span>{option}</span>
              ))}
            </div>
          </div>
        </>
      )}
      <div className="flex flex-col gap-4 w-full bg-nhpOffWhite h-full text-nhpDarkGrayishBlue p-6 md:p-12 font-inter text-[15px]">
        {/* Navbar */}
        <div className="flex justify-between items-center w-full">
          <div className="w-8 lg:w-full overflow-hidden">
            <img src="images/news-home-page/logo.svg" alt="Logo" />
          </div>
          <div className="w-8 overflow-hidden md:hidden">
            <img
              src="images/news-home-page/icon-menu.svg"
              alt="Icon Menu"
              onClick={handleDrawer}
            />
          </div>
          <div className="hidden md:flex gap-8">
            {NavigationOption.map((option) => (
              <span className="cursor-pointer hover:text-nhpSoftRed">
                {option}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 my-8">
          {/* Content */}
          <div className="flex flex-col gap-4 lg:max-w-[70%]">
            <div className="lg:hidden">
              <img
                src="images/news-home-page/image-web-3-mobile.jpg"
                alt="Image Web 3 Mobile"
              />
            </div>
            <div className="hidden lg:block">
              <img
                src="images/news-home-page/image-web-3-desktop.jpg"
                alt="Image Web 3 Mobile"
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
              <span className="text-4xl lg:text-6xl font-extrabold text-nhpVeryDarkBlue">
                The Bright Future of Web 3.0?
              </span>
              <div className="flex flex-col gap-4 lg:gap-0 justify-between">
                <p className="text-nhpDarkGrayishBlue lg:text-lg">
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </p>
                <button className="tracking-widest py-3 px-8 lg:py-4 lg:tracking-[0.2em] lg:px-16 w-fit bg-nhpSoftRed hover:bg-nhpVeryDarkBlue text-nhpOffWhite text-xs lg:text-lg font-bold">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
          {/* New Content */}
          <div className="flex flex-col gap-4 p-4 bg-nhpVeryDarkBlue">
            <span className="text-2xl lg:text-4xl font-semibold text-nhpSoftOrange">
              New
            </span>
            <div className="flex flex-col gap-4 justify-around h-full">
              {NewsSideContent.map((side, index) => {
                const lastNews = index === NewsSideContent.length - 1;

                return (
                  <div
                    className={`flex flex-col ${
                      !lastNews && "border-b-[1px] border-nhpGrayishBlue"
                    }`}
                  >
                    <span className="text-nhpOffWhite text-xl lg:text-2xl font-bold cursor-pointer hover:text-nhpSoftOrange">
                      {side.title}
                    </span>
                    <span
                      className={`text-nhpGrayishBlue ${!lastNews && "pb-6"}`}
                    >
                      {side.description}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* Bottom Content */}
        <div className="flex flex-col gap-4 lg:flex-row">
          {NewsBottomContent.map((bottom, index) => (
            <div className="flex flex-row gap-4">
              <img
                src={bottom.image}
                alt="Image News"
                className="object-cover max-w-[6rem] lg:max-w-[8rem] xl:max-w-xs"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-nhpGrayishBlue">
                  0{index + 1}
                </span>
                <span className="text-lg font-bold text-nhpVeryDarkBlue cursor-pointer hover:text-nhpSoftRed">
                  {bottom.title}
                </span>
                <span className="text-nhpDarkGrayishBlue">
                  {bottom.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsHomePage;
