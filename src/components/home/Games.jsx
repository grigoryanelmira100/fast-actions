import Dice from "../../assets/icons/dice.svg";
import Button from "~/components/ui/button/Button";
import { redirectOnParent } from "~/utils/parentBridge";
const Games = () => {
  return (
    <div className="flex flex-col xl:flex-row xl:justify-start items-center justify-center bg-black gap-6 xl:gap-64 px-5 py-12 md:px-20 md:py-16">
      <div className="flex flex-col items-center xl:items-start gap-10">
        <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold w-full uppercase text-center xl:text-start bg-gradient-white-red bg-clip-text text-transparent">
          Thousands of Games,Infinite Wins
        </h1>
        <p className="text-base md:text-lg font-normal w-full max-w-[550px] text-center xl:text-start text-gray-900">
          Access premium slots, table games, and live dealers from the
          world&apos;s leading game studios. Experience cutting-edge graphics,
          immersive gameplay, and massive jackpots.
        </p>
        <Button
          variant="gold"
          className="max-w-[200px] w-full"
          onClick={() => redirectOnParent("https://vipclub.lv/#/casino")}
        >
          Explore Casino
        </Button>
      </div>
      <img
        src={Dice}
        alt="Gold dice"
        width={604}
        height={429}
        className="w-full max-w-md xl:max-w-lg object-contain "
      />
    </div>
  );
};

export default Games;
