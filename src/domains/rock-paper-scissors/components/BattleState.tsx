import React, { useEffect, useState } from "react";
import { ActionMoveType } from "../RockPaperScissors";
import ActionCircle from "./ActionCircle";

type Props = {
  playerAction: ActionMoveType;
  gameState: number | null;
  setGameState: (value: number | null) => void;
};

const BattleState: React.FC<Props> = ({
  playerAction,
  gameState,
  setGameState,
}) => {
  const actionMoves = ["rock", "paper", "scissors", "lizard", "spock"];
  const [enemyMove, setEnemyMove] = useState<ActionMoveType>(null);
  const [isLoading, setIsLoading] = useState(true);

  function getEnemyMove() {
    const rand = Math.floor(Math.random() * 5);

    return actionMoves[rand] as ActionMoveType;
  }

  useEffect(() => {
    if (isLoading || enemyMove === null) return;

    switch (playerAction) {
      case "lizard":
        if (enemyMove === "lizard") setGameState(2);
        else if (enemyMove === "spock" || enemyMove === "paper")
          setGameState(1);
        else setGameState(0);
        break;
      case "paper":
        if (enemyMove === "paper") setGameState(2);
        else if (enemyMove === "spock" || enemyMove === "rock") setGameState(1);
        else setGameState(0);
        break;
      case "rock":
        if (enemyMove === "rock") setGameState(2);
        else if (enemyMove === "lizard" || enemyMove === "scissors")
          setGameState(1);
        else setGameState(0);
        break;
      case "scissors":
        if (enemyMove === "scissors") setGameState(2);
        else if (enemyMove === "lizard" || enemyMove === "paper")
          setGameState(1);
        else setGameState(0);
        break;
      case "spock":
        if (enemyMove === "spock") setGameState(2);
        else if (enemyMove === "scissors" || enemyMove === "rock")
          setGameState(1);
        else setGameState(0);
        break;
    }
  }, [isLoading, gameState, enemyMove]);

  useEffect(() => {
    if (!playerAction) return;

    setIsLoading(true);
    setTimeout(() => {
      setEnemyMove(getEnemyMove());
      setIsLoading(false);
    }, 2000);
  }, [playerAction]);

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center my-32 w-[20rem] lg:w-[28rem]">
        <div className="flex flex-col items-center justify-between h-full gap-2">
          <ActionCircle action={playerAction} />
          <span className="tracking-wider">YOU PICKED</span>
        </div>
        <div className="flex flex-col items-center justify-between h-full gap-2">
          <ActionCircle action={enemyMove} isLoading={isLoading} />
          <span className="tracking-wider">THE HOUSE PICKED</span>
        </div>
      </div>
    </div>
  );
};

export default BattleState;
