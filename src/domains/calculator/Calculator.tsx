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
        {/* Header */}
        <div className="flex items-center justify-between w-full max-w-xl">
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
        {/* Value Display */}
        <div className="bg-calcBackgroundScreenT1 rounded-lg w-full max-w-xl flex p-4 h-fit justify-end my-4">
          <span>399,981</span>
        </div>
        {/* Calculator Button */}
        <div className="bg-calcBackgroundToggleT1 rounded-lg w-full max-w-xl p-6 grid grid-cols-4 gap-4 lg:gap-6">
          {/* First Line */}
          <KeyButton value="7" regular />
          <KeyButton value="8" regular />
          <KeyButton value="9" regular />
          <KeyButton value="DEL" action />
          {/* Second Line */}
          <KeyButton value="4" regular />
          <KeyButton value="5" regular />
          <KeyButton value="6" regular />
          <KeyButton value="+" regular />
          {/* Third Line */}
          <KeyButton value="3" regular />
          <KeyButton value="2" regular />
          <KeyButton value="1" regular />
          <KeyButton value="-" regular />
          {/* Fourth Line */}
          <KeyButton value="." regular />
          <KeyButton value="0" regular />
          <KeyButton value="/" regular />
          <KeyButton value="x" regular />
          {/* Fifth Line */}
          <KeyButton className="col-span-2" value="RESET" action />
          <KeyButton className="col-span-2" value="=" submit />
        </div>
      </div>
    </div>
  );
};

const KeyButton: React.FC<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > & {
    value: string;
    color?: string;
    borderColor?: string;
    regular?: boolean;
    action?: boolean;
    submit?: boolean;
    theme?: number;
  }
> = ({
  value,
  regular = false,
  action = false,
  submit = false,
  theme = 1,
  ...props
}) => {
  type MapType = {
    [key: number]: string;
  };

  const colorMap: MapType = {
    1: "bg-calcKeyGrayBackground border-calcKeyGrayShadow text-calcTextDarkBlueT1 text-3xl",
  };

  const actionColorMap: MapType = {
    1: "bg-calcKeyDarkBlueBackground border-calcKeyDarkBlueShadow text-white text-xl",
  };

  const submitColorMap: MapType = {
    1: "bg-calcKeyRedBackground border-calcKeyRedShadow text-white text-xl",
  };

  return (
    <div
      {...props}
      className={`${props.className} ${regular && colorMap[theme]} ${
        action && actionColorMap[theme]
      } ${
        submit && submitColorMap[theme]
      } rounded-lg flex items-center justify-center p-2 border-b-4 h-16`}
    >
      {value}
    </div>
  );
};

export default Calculator;
