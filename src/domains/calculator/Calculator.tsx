import React, { useState } from "react";

type MapType = {
  [key: number]: string;
};

type ThemeMapType = {
  [key: number]: {
    [key: string]: string;
  };
};

const Calculator = () => {
  const [theme, setTheme] = useState(1);

  const themeMap: ThemeMapType = {
    1: {
      main: "bg-calcBackgroundMainT1 text-white",
      toggle: "bg-calcBackgroundToggleT1",
      display: "bg-calcBackgroundScreenT1",
      circle: "bg-calcKeyRedBackground hover:bg-red-400",
    },
    2: {
      main: "bg-calcKeyGrayBackground text-calcTextDarkBlueT2",
      toggle: "bg-calcBackgroundToggleT2",
      display: "bg-calcBackgroundScreenT2",
      circle: "bg-calcKeyOrangeBackground hover:bg-orange-400",
    },
    3: {
      main: "bg-calcBackgroundMainT3 text-calcTextLightYellowT3",
      toggle: "bg-calcBackgroundToggleT3",
      display: "bg-calcBackgroundToggleT3",
      circle: "bg-calcKeyCyanBackground hover:bg-cyan-200",
    },
  };

  const handleTheme = () => {
    if (theme < 3) {
      setTheme(theme + 1);
    } else {
      setTheme(1);
    }
  };

  return (
    <div
      className={`${themeMap[theme].main} w-screen h-screen font-leagueSpartan font-bold text-[36px]`}
    >
      <div className="flex flex-col items-center p-5 w-full h-full">
        {/* Header */}
        <div className="flex items-center justify-between w-full max-w-xl">
          <span>calc</span>
          <div className="flex flex-row items-center gap-2">
            <span className="text-xs tracking-widest">THEME</span>
            <div className="flex flex-col text-xs">
              <div
                className={`${themeMap[theme].toggle} col-span-3 grid grid-cols-3 p-1 rounded-full relative`}
              >
                <div
                  onClick={handleTheme}
                  className={`col-start-${theme} w-5 h-5 rounded-full ${themeMap[theme].circle} cursor-pointer`}
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
        <div
          className={`${themeMap[theme].display} rounded-lg w-full max-w-xl flex p-4 h-fit justify-end my-4`}
        >
          <span>399,981</span>
        </div>
        {/* Calculator Button */}
        <div
          className={`${themeMap[theme].toggle} rounded-lg w-full max-w-xl p-6 grid grid-cols-4 gap-4 lg:gap-6`}
        >
          {/* First Line */}
          <KeyButton theme={theme} value="7" regular />
          <KeyButton theme={theme} value="8" regular />
          <KeyButton theme={theme} value="9" regular />
          <KeyButton theme={theme} value="DEL" action />
          {/* Second Line */}
          <KeyButton theme={theme} value="4" regular />
          <KeyButton theme={theme} value="5" regular />
          <KeyButton theme={theme} value="6" regular />
          <KeyButton theme={theme} value="+" regular />
          {/* Third Line */}
          <KeyButton theme={theme} value="3" regular />
          <KeyButton theme={theme} value="2" regular />
          <KeyButton theme={theme} value="1" regular />
          <KeyButton theme={theme} value="-" regular />
          {/* Fourth Line */}
          <KeyButton theme={theme} value="." regular />
          <KeyButton theme={theme} value="0" regular />
          <KeyButton theme={theme} value="/" regular />
          <KeyButton theme={theme} value="x" regular />
          {/* Fifth Line */}
          <KeyButton
            theme={theme}
            className="col-span-2"
            value="RESET"
            action
          />
          <KeyButton theme={theme} className="col-span-2" value="=" submit />
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
  const colorMap: MapType = {
    1: "bg-calcKeyGrayBackground border-calcKeyGrayShadow text-calcTextDarkBlueT1 text-3xl hover:bg-slate-100",
    2: "bg-calcKeyGrayBackgroundT2 border-calcKeyGrayShadowT2 text-calcTextDarkBlueT2 text-3xl hover:bg-white",
    3: "bg-calcKeyDarkVioletBackgroundT3 border-calcKeyDarkVioletShadowT3 text-calcTextLightYellowT3 text-3xl hover:bg-purple-900",
  };

  const actionColorMap: MapType = {
    1: "bg-calcKeyDarkBlueBackground border-calcKeyDarkBlueShadow text-white text-xl hover:bg-blue-200/70",
    2: "bg-calcKeyDarkCyanBackground border-calcKeyDarkCyanShadow text-white text-xl hover:bg-cyan-500/40",
    3: "bg-calcKeyVioletBackground border-calcKeyVioletShadow text-white text-xl hover:bg-purple-800",
  };

  const submitColorMap: MapType = {
    1: "bg-calcKeyRedBackground border-calcKeyRedShadow text-white text-xl hover:bg-red-400",
    2: "bg-calcKeyOrangeBackground border-calcKeyOrangeShadow text-white text-xl hover:bg-orange-400",
    3: "bg-calcKeyCyanBackground border-calcKeyCyanShadow text-calcTextDarkBlueT3 text-xl hover:bg-cyan-200",
  };

  return (
    <div
      {...props}
      className={`${props.className} ${regular && colorMap[theme]} ${
        action && actionColorMap[theme]
      } ${
        submit && submitColorMap[theme]
      } rounded-lg flex items-center justify-center p-2 border-b-4 h-16 cursor-pointer`}
    >
      {value}
    </div>
  );
};

export default Calculator;
