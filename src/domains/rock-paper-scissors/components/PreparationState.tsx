import { ActionMoveType } from "../RockPaperScissors";
import ActionCircle from "./ActionCircle";

type PreparationStateType = {
  onSelectAction: (value: ActionMoveType) => void;
};

const PreparationState: React.FC<PreparationStateType> = ({
  onSelectAction,
}) => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col my-32 w-[20rem] lg:w-[28rem]">
        <div className="flex items-center justify-center">
          <ActionCircle
            action="scissors"
            onClick={() => onSelectAction("scissors")}
          />
        </div>
        <div className="flex gap-32 items-center justify-center">
          <ActionCircle
            action="spock"
            onClick={() => onSelectAction("spock")}
          />
          <ActionCircle
            action="paper"
            onClick={() => onSelectAction("paper")}
          />
        </div>
        <div className="flex gap-8 items-center justify-center">
          <ActionCircle
            action="lizard"
            onClick={() => onSelectAction("lizard")}
          />
          <ActionCircle action="rock" onClick={() => onSelectAction("rock")} />
        </div>
      </div>
    </div>
  );
};

export default PreparationState;
