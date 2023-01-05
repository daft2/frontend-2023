import React from "react";

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  isVisible: boolean;
};

const RulesModal = (props: Props) => {
  if (!props.isVisible) return null;

  return (
    <div className="w-full h-full absolute flex items-center justify-center">
      <div className="bg-slate-100 flex flex-col items-center justify-around md:justify-start h-full w-full md:w-fit md:h-fit z-10 text-rpsDark p-8 md:rounded-xl gap-4">
        <div className="flex flex-col md:flex-row items-center w-full justify-between">
          <span className="text-3xl font-bold">RULES</span>
          <img
            src="images/rock-paper-scissors/icon-close.svg"
            className="w-5 h-5 cursor-pointer hidden md:block"
            onClick={props.onClick}
          />
        </div>
        <img
          src="images/rock-paper-scissors/image-rules-bonus.svg"
          className="object-cover w-fit"
        />
        <img
          src="images/rock-paper-scissors/icon-close.svg"
          className="w-5 h-5 cursor-pointer md:hidden"
          onClick={props.onClick}
        />
      </div>
      <div className="absolute w-full h-full bg-black/40"></div>
    </div>
  );
};

export default RulesModal;
