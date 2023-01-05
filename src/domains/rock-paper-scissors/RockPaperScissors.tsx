import { useState } from "react";
import PreparationState from "./components/PreparationState";
import RulesModal from "./components/RulesModal";

const ActionMove = ["rock", "paper", "scissors", "lizard", "spock"];

const RockPaperScissors = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="w-screen h-screen justify-center bg-gradient-to-b font-barlowSemiCondensed flex font-semibold to-rpsBackgroundDark from-rpsBackgroundLight relative">
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
        <PreparationState />
      </div>
      <div className="absolute bottom-12 lg:right-12">
        <button
          className="text-2xl tracking-widest border rounded-xl w-[10rem] py-2"
          onClick={handleModal}
        >
          RULES
        </button>
      </div>
      <RulesModal isVisible={isModalOpen} onClick={handleModal} />
    </div>
  );
};

export default RockPaperScissors;
