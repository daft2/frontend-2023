import { useEffect, useState } from "react";
import BattleState from "./components/BattleState";
import PreparationState from "./components/PreparationState";
import RulesModal from "./components/RulesModal";

const ActionMove = ["rock", "paper", "scissors", "lizard", "spock"];

export type ActionMoveType =
  | "rock"
  | "paper"
  | "scissors"
  | "lizard"
  | "spock"
  | null;

const RockPaperScissors = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [playerAction, setPlayerAction] = useState<ActionMoveType>(null);
  // Game State is 0 for lose, 1 for win, and 2 for draw
  const [gameState, setGameState] = useState<number | null>(null);
  const [score, setScore] = useState<number>(0);

  const handleModal = () => setIsModalOpen(!isModalOpen);

  const handleSelectAction = (value: ActionMoveType) => setPlayerAction(value);

  useEffect(() => {
    if (gameState == null) return;
    if (gameState == 1) setScore(score + 1);
    if (gameState == 0 && score > 0) setScore(score - 1);
  }, [gameState]);

  const handlePlayAgain = () => {
    setGameState(null);
    setPlayerAction(null);
  };

  useEffect(() => {
    document.title = "Rock Paper Scissors Game";
  }, []);

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
              {score}
            </span>
          </div>
        </div>
        {playerAction === null && (
          <PreparationState onSelectAction={handleSelectAction} />
        )}
        {playerAction !== null && (
          <BattleState
            gameState={gameState}
            setGameState={setGameState}
            playerAction={playerAction}
          />
        )}
        {gameState !== null && (
          <div className="flex flex-col items-center justify-center gap-4">
            <span className="text-6xl font-bold tracking-wider">
              {gameState === 1
                ? "YOU WIN"
                : gameState === 0
                ? "YOU LOSE"
                : "DRAW"}
            </span>
            <button
              onClick={handlePlayAgain}
              className="bg-slate-100 rounded text-rpsDark w-full text-lg py-2 tracking-widest cursor-pointer hover:bg-rpsDark hover:text-slate-100"
            >
              PLAY AGAIN
            </button>
          </div>
        )}
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
