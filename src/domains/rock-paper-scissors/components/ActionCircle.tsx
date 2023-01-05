type ActionCircleType = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  action: "rock" | "paper" | "scissors" | "lizard" | "spock";
  className?: string;
};

const ActionCircle: React.FC<ActionCircleType> = ({
  action,
  className,
  ...props
}) => {
  const colorMap = {
    rock: {
      background: "bg-gradient-to-b from-rpsRockLight to-rpsRockDark",
      border: "border-b-red-700",
      image: "images\\rock-paper-scissors\\icon-rock.svg",
    },
    paper: {
      background: "bg-gradient-to-b from-rpsPaperLight to-rpsPaperDark",
      border: "border-b-blue-700",
      image: "images\\rock-paper-scissors\\icon-paper.svg",
    },
    scissors: {
      background: "bg-gradient-to-b from-rpsScissorsLight to-rpsScissorsDark",
      border: "border-b-yellow-700",
      image: "images\\rock-paper-scissors\\icon-scissors.svg",
    },
    lizard: {
      background: "bg-gradient-to-b from-rpsLizardLight to-rpsLizardDark",
      border: "border-b-purple-700",
      image: "images\\rock-paper-scissors\\icon-lizard.svg",
    },
    spock: {
      background: "bg-gradient-to-b from-rpsCyanLight to-rpsCyanDark",
      border: "border-b-cyan-700",
      image: "images\\rock-paper-scissors\\icon-spock.svg",
    },
  };

  return (
    <div
      {...props}
      className={`${className} ${colorMap[action].background} ${colorMap[action].border} rounded-[100%] p-3 lg:p-4 flex items-center justify-center shadow-xl border-b-[6px]`}
    >
      <div className="rounded-[100%] w-[4rem] h-[4rem] lg:w-[6rem] lg:h-[6rem] flex items-center justify-center bg-slate-100 border-t-[6px] border-gray-300">
        <img
          src={colorMap[action].image}
          alt="Action Move"
          className="object-cover w-[1.5rem] lg:w-[3rem]"
        />
      </div>
    </div>
  );
};

export default ActionCircle;
