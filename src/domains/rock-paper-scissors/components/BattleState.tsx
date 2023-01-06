import React, { useEffect, useState } from "react";
import ActionCircle from "./ActionCircle";

type Props = {
  playerAction: "rock" | "paper" | "scissors" | "lizard" | "spock";
};

const BattleState = (props: Props) => {
  const actionMoves = ["rock", "paper", "scissors", "lizard", "spock"];
  const [enemyMove, setEnemyMove] = useState<typeof props.playerAction>("rock");
  const [isLoading, setIsLoading] = useState(true);

  function getEnemyMove() {
    const rand = Math.floor(Math.random() * 5);

    return actionMoves[rand] as typeof props.playerAction;
  }

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setEnemyMove(getEnemyMove());
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="flex justify-between items-center my-32 w-[20rem] lg:w-[28rem]">
      <div className="flex flex-col items-center justify-between h-full gap-2">
        <ActionCircle action="scissors" />
        <span className="tracking-wider">YOU PICKED</span>
      </div>
      <div className="flex flex-col items-center justify-between h-full gap-2">
        <ActionCircle action={enemyMove} isLoading={isLoading} />
        <span className="tracking-wider">THE HOUSE PICKED</span>
      </div>
    </div>
  );
};

export default BattleState;
