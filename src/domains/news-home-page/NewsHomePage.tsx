const NavigationOption = ["Home", "New", "Popular", "Trending", "Categories"];

const NewsHomePage = () => {
  return (
    <div className="flex bg-white text-nhpDarkGrayishBlue p-4 font-inter">
      {/* Navbar */}
      <div className="flex flex-row justify-between items-center w-full">
        <div>
          <img src="src/assets/news-home-page/logo.svg" alt="Logo" />
        </div>
        <div className="flex flex-row gap-8">
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

export default NewsHomePage;
