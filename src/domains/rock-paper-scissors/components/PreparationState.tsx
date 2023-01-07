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
          <WrappedActionCircle
            action="scissors"
            onSelectAction={onSelectAction}
          />
        </div>
        <div className="flex gap-32 items-center justify-center">
          <WrappedActionCircle action="spock" onSelectAction={onSelectAction} />
          <WrappedActionCircle action="paper" onSelectAction={onSelectAction} />
        </div>
        <div className="flex gap-8 items-center justify-center">
          <WrappedActionCircle
            action="lizard"
            onSelectAction={onSelectAction}
          />
          <WrappedActionCircle action="rock" onSelectAction={onSelectAction} />
        </div>
      </div>
    </div>
  );
};

const WrappedActionCircle = ({
  action,
  onSelectAction,
}: {
  action: ActionMoveType;
  onSelectAction: (value: ActionMoveType) => void;
}) => (
  <ActionCircle
    action={action}
    className="cursor-pointer hover:scale-110 ease-in-out duration-300"
    onClick={() => onSelectAction(action)}
  />
);

export default PreparationState;
