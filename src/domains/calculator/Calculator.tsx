import React, { useCallback, useEffect, useState } from "react";

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

  const [inputValue1, setInputValue1] = useState("0");
  const [inputValue2, setInputValue2] = useState("0");
  const [isOperation, setIsOperation] = useState(false);
  const [currentOperator, setIsCurrentOperator] = useState("");

  const formatValue = (value: number) => new Intl.NumberFormat().format(value);

  const handleInsertNumber = (value: string) => {
    if (isOperation) {
      if (inputValue2 == "0") setInputValue2(value);
      else setInputValue2(inputValue2 + value);
    } else {
      if (inputValue1 == "0") setInputValue1(value);
      else setInputValue1(inputValue1 + value);
    }
  };

  const handleDelete = () => {
    if (isOperation) {
      const newVal = inputValue2.substring(0, inputValue2.length - 1);
      if (inputValue2.length === 1) setInputValue2("0");
      else setInputValue2(newVal);
    } else {
      const newVal = inputValue1.substring(0, inputValue1.length - 1);
      if (inputValue1.length === 1) setInputValue1("0");
      else setInputValue1(newVal);
    }
  };

  const handleReset = () => {
    setIsOperation(false);
    setInputValue1("0");
    setInputValue2("0");
  };

  const handleOperation = (operator: string) => {
    if (isOperation) {
      handleSubmit();
    }

    setIsOperation(true);
    setIsCurrentOperator(operator);
  };

  const handleSubmit = () => {
    setIsOperation(false);
    const val1 = parseFloat(inputValue1);
    const val2 = parseFloat(inputValue2);

    switch (currentOperator) {
      case "+":
        setInputValue1((val1 + val2).toString());
        setInputValue2("0");
        break;
      case "-":
        setInputValue1((val1 - val2).toString());
        setInputValue2("0");
        break;
      case "/":
        setInputValue1((val1 / val2).toString());
        setInputValue2("0");
        break;
      case "*":
        setInputValue1((val1 * val2).toString());
        setInputValue2("0");
        break;
    }
  };

  useEffect(() => {
    document.title = "Calculator App";
  }, []);

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
                {theme === 1 && (
                  <div
                    onClick={handleTheme}
                    className={`col-start-1 w-5 h-5 rounded-full ${themeMap[theme].circle} cursor-pointer`}
                  />
                )}
                {theme === 2 && (
                  <div
                    onClick={handleTheme}
                    className={`col-start-2 w-5 h-5 rounded-full ${themeMap[theme].circle} cursor-pointer`}
                  />
                )}
                {theme === 3 && (
                  <div
                    onClick={handleTheme}
                    className={`col-start-3 w-5 h-5 rounded-full ${themeMap[theme].circle} cursor-pointer`}
                  />
                )}
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
          className={`${themeMap[theme].display} rounded-lg w-full max-w-xl flex p-4 h-fit items-end my-4 flex-col`}
        >
          {!isOperation && (
            <>
              <span className="overflow-hidden text-ellipsis text-sm">
                {inputValue2.length > 3
                  ? formatValue(parseFloat(inputValue2))
                  : inputValue2}
              </span>
              <span className="overflow-hidden text-ellipsis">
                {inputValue1.length > 3
                  ? formatValue(parseFloat(inputValue1))
                  : inputValue1}
              </span>
            </>
          )}
          {isOperation && (
            <>
              <span className="overflow-hidden text-ellipsis text-sm">
                {inputValue1.length > 3
                  ? formatValue(parseFloat(inputValue1))
                  : inputValue1}
              </span>
              <span className="overflow-hidden text-ellipsis">
                {inputValue2.length > 3
                  ? formatValue(parseFloat(inputValue2))
                  : inputValue2}
              </span>
            </>
          )}
        </div>
        {/* Calculator Button */}
        <div
          className={`${themeMap[theme].toggle} rounded-lg w-full max-w-xl p-6 grid grid-cols-4 gap-4 lg:gap-6`}
        >
          {/* First Line */}
          <KeyButton
            theme={theme}
            onClick={() => handleInsertNumber("7")}
            value="7"
            regular
          />
          <KeyButton
            theme={theme}
            onClick={() => handleInsertNumber("8")}
            value="8"
            regular
          />
          <KeyButton
            theme={theme}
            onClick={() => handleInsertNumber("9")}
            value="9"
            regular
          />
          <KeyButton theme={theme} onClick={handleDelete} value="DEL" action />
          {/* Second Line */}
          <KeyButton
            theme={theme}
            onClick={() => handleInsertNumber("4")}
            value="4"
            regular
          />
          <KeyButton
            theme={theme}
            onClick={() => handleInsertNumber("5")}
            value="5"
            regular
          />
          <KeyButton
            theme={theme}
            onClick={() => handleInsertNumber("6")}
            value="6"
            regular
          />
          <KeyButton
            theme={theme}
            onClick={() => handleOperation("+")}
            value="+"
            regular
          />
          {/* Third Line */}
          <KeyButton
            theme={theme}
            onClick={() => handleInsertNumber("1")}
            value="1"
            regular
          />
          <KeyButton
            theme={theme}
            onClick={() => handleInsertNumber("2")}
            value="2"
            regular
          />
          <KeyButton
            theme={theme}
            onClick={() => handleInsertNumber("3")}
            value="3"
            regular
          />
          <KeyButton
            theme={theme}
            onClick={() => handleOperation("-")}
            value="-"
            regular
          />
          {/* Fourth Line */}
          <KeyButton
            theme={theme}
            onClick={() => handleInsertNumber(".")}
            value="."
            regular
          />
          <KeyButton
            theme={theme}
            onClick={() => handleInsertNumber("0")}
            value="0"
            regular
          />
          <KeyButton
            theme={theme}
            onClick={() => handleOperation("/")}
            value="/"
            regular
          />
          <KeyButton
            theme={theme}
            onClick={() => handleOperation("*")}
            value="x"
            regular
          />
          {/* Fifth Line */}
          <KeyButton
            theme={theme}
            onClick={handleReset}
            className="col-span-2"
            value="RESET"
            action
          />
          <KeyButton
            theme={theme}
            onClick={handleSubmit}
            className="col-span-2"
            value="="
            submit
          />
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
