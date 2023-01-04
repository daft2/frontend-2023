import React from "react";

const ActionMove = ["rock", "paper", "scissors", "lizard", "spock"];

const RockPaperScissors = () => {
  return (
    <div className="w-screen h-screen bg-gradient-to-b font-barlowSemiCondensed flex items-center justify-center font-semibold to-rpsBackgroundDark from-rpsBackgroundLight">
      <div className="flex flex-col">
        <div className="flex justify-between border-4 border-rpsHeader rounded-lg">
          <div className="flex flex-col p-4">
            {ActionMove.map((action) => (
              <span className="text-2xl uppercase">{action}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RockPaperScissors;
