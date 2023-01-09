import React, { useState } from "react";

type Props = {};

const Calculator = (props: Props) => {
  const [theme, setTheme] = useState(1);

  const handleTheme = () => {
    if (theme < 3) {
      setTheme(theme + 1);
    } else {
      setTheme(1);
    }
  };

  return (
    <div className="bg-calcBackgroundMainT1 w-screen h-screen font-leagueSpartan font-bold text-[36px]">
      <div className="flex flex-col items-center p-5 w-full h-full">
        <div className="flex items-center justify-between w-full max-w-md">
          <span>calc</span>
          <div className="flex flex-row items-center gap-2">
            <span className="text-xs tracking-widest">THEME</span>
            <div className="flex flex-col text-xs">
              <div
                onClick={handleTheme}
                className="bg-calcBackgroundToggleT1 col-span-3 grid grid-cols-3 p-1 rounded-full relative"
              >
                <div
                  className={`col-start-${theme} w-5 h-5 rounded-full bg-calcKeyRedBackground`}
                />
                <div className="flex justify-between absolute -top-4 w-full px-2">
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
