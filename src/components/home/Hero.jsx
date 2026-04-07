import Card from "~/components/ui/card/Card";
import Button from "~/components/ui/button/Button";
import { heroCardsData } from "~/constants/heroCardsData";
import { redirectOnParent } from "~/utils/parentBridge";

const Hero = () => {
  return (
    <div className="flex flex-col xl:flex-row items-center justify-center bg-hero  bg-cover bg-center gap-14 px-5 py-12 md:px-20 md:py-40">
      <div className="flex flex-col xl:items-start items-center gap-10">
        <div className="w-auto flex items-center justify-center rounded-full bg-red-600 py-2 px-4">
          <p className="text-base font-semibold text-white uppercase bg-red-gradient-200">
            Play & Earn
          </p>
        </div>
        <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold w-full uppercase  text-center xl:text-start bg-gradient-white-red bg-clip-text text-transparent">
          Your Game Starts Here
        </h1>
        <p className="text-base md:text-lg font-normal w-full max-w-[550px] text-gray-300  text-center xl:text-start">
          From live sports betting to immersive casino entertainment, discover
          nonstop action, big moments, and winning opportunities all in one
          place.
        </p>
        <div className="flex flex-row items-center gap-10">
          <Button
            variant="red"
            className="hidden xl:block shrink-0"
            onClick={() => redirectOnParent("https://vipclub.lv/#/casino")}
          >
            Play Casino
          </Button>
          <Button
            variant="white"
            className="hidden xl:block"
            onClick={() => redirectOnParent("https://vipclub.lv/#/sportsbook")}
          >
            Bet Sports
          </Button>
        </div>
      </div>

      <div className="max-w-[622px] w-full grid grid-cols-1 md:grid-cols-2 items-center justify-items-center  gap-8">
        {heroCardsData.map((card) => (
          <Card
            key={card.id}
            icon={card.icon}
            alt={card.alt}
            title={card.title}
          />
        ))}
      </div>
      <div className="xl:hidden w-full flex flex-col items-center gap-6">
        <Button
          variant="red"
          className="max-w-[400px] w-full block xl:hidden"
          onClick={() => redirectOnParent("https://vipclub.lv/#/casino")}
        >
          Play Casino
        </Button>
        <Button
          variant="white"
          className="max-w-[400px] w-full block xl:hidden"
          onClick={() => redirectOnParent("https://vipclub.lv/#/sportsbook")}
        >
          Bet Sports
        </Button>
      </div>
    </div>
  );
};

export default Hero;
