import React from "react";
import ActionCircle from "./components/ActionCircle";

const ActionMove = ["rock", "paper", "scissors", "lizard", "spock"];

const RockPaperScissors = () => {
  return (
    <div className="w-screen h-screen justify-center bg-gradient-to-b font-barlowSemiCondensed flex font-semibold to-rpsBackgroundDark from-rpsBackgroundLight">
      <div className="flex flex-col my-8 w-full items-center mx-4">
        <div className="flex justify-between border-4 border-rpsHeader rounded-lg xl:rounded-2xl max-w-5xl w-full items-center p-4">
          <div className="flex flex-col">
            {ActionMove.map((action) => (
              <span className="text-lg xl:text-3xl uppercase leading-[0.8] xl:leading-[0.8]">
                {action}
              </span>
            ))}
          </div>
          <div className="bg-white rounded-xl text-rpsScore flex flex-col items-center justify-center px-8 xl:px-12 py-3">
            <span className="tracking-widest text-xs xl:text-xl">SCORE</span>
            <span className="text-5xl xl:text-7xl font-bold text-rpsDark">
              12
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex flex-col my-40 w-[20rem] lg:w-[28rem]">
            <div className="flex items-center justify-center">
              <ActionCircle action="scissors" />
            </div>
            <div className="flex gap-32 items-center justify-center">
              <ActionCircle action="spock" />
              <ActionCircle action="paper" />
            </div>
            <div className="flex gap-8 items-center justify-center">
              <ActionCircle action="lizard" />
              <ActionCircle action="rock" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RockPaperScissors;
