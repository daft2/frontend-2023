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

const NewsHomePage = () => {
  return (
    <div className="grid grid-cols-12 gap-12 grid-rows-8 bg-white text-nhpDarkGrayishBlue p-12 font-inter text-[15px]">
      {/* Navbar */}
      <div className="">
        <img src="src/assets/news-home-page/logo.svg" alt="Logo" />
      </div>
      {NavigationOption.map((option, index) => (
        <div
          className={`col-start-${index + 8} flex items-center justify-center`}
        >
          <span className="cursor-pointer hover:text-nhpSoftRed">{option}</span>
        </div>
      ))}
      <div className="col-span-8">
        <img
          src="src\assets\news-home-page\image-web-3-desktop.jpg"
          alt="Image Banner"
        />
      </div>
      <div className="col-start-9 col-span-4 row-span-2 grid grid-rows-8 p-8 bg-nhpVeryDarkBlue">
        <span className="text-6xl font-semibold text-nhpSoftOrange">New</span>
        {NewsSideContent.map((news, index) => {
          const lastNews = index === NewsSideContent.length - 1;
          return (
            <div
              className={`flex flex-col gap-4 row-span-2 my-2 ${
                !lastNews && "border-b-[1px]"
              }`}
            >
              <span className="text-4xl text-nhpOffWhite font-bold cursor-pointer hover:text-nhpSoftOrange">
                {news.title}
              </span>
              <span className="text-3xl">{news.description}</span>
            </div>
          );
        })}
      </div>
      <div className="col-span-3 text-nhpVeryDarkBlue">
        <span className="text-7xl font-bold">
          The Bright Future of Web 3.0?
        </span>
      </div>
      <div className="col-start-4 col-span-5 flex flex-col justify-between">
        <p className="text-2xl">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button className="bg-nhpSoftRed text-nhpOffWhite w-fit px-12 py-4 tracking-[0.3rem] font-semibold hover:bg-nhpVeryDarkBlue">
          READ MORE
        </button>
      </div>
    </div>
  );
};

{
}
export default NewsHomePage;
