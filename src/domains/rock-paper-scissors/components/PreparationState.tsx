import ActionCircle from "./ActionCircle";

const PreparationState = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col my-32 w-[20rem] lg:w-[28rem]">
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
  );
};

export default PreparationState;
