import { chooseCardsData } from "~/constants/chooseCardsData";
import { BACKGROUND_URLS } from "~/constants/backgroundUrls";
import { useLazyBackground } from "~/hooks/useLazyBackground";

function ChooseCard({ item }) {
  const { ref, style } = useLazyBackground(BACKGROUND_URLS.cardImg);
  return (
    <div
      ref={ref}
      style={style}
      className="choose-card w-[232px] h-[151px] flex flex-col items-center justify-center gap-3 rounded-xl bg-gold-500 bg-cover bg-center px-6 py-5 min-w-[180px] hover:cursor-pointer"
    >
      <img
        src={item.icon}
        alt={item.title}
        width={50}
        height={50}
        loading="lazy"
        decoding="async"
        className="choose-card-icon h-12 w-12 object-contain"
      />
      <p className="text-base md:text-lg font-bold text-center text-white">
        {item.title}
      </p>
    </div>
  );
}

const Choose = () => {
  return (
    <>
      <div className="w-full h-[1px] bg-gold"></div>
      <div className="flex flex-col items-center justify-center gap-9 bg-choose bg-cover bg-center px-5 md:px-20 py-12 md:py-20">
        <h2 className="text-2xl md:text-4xl font-bold w-full bg-gradient-white-red bg-clip-text text-center text-transparent uppercase">
          Why Choose Us?
        </h2>
        <div className="flex flex-row items-center justify-center gap-8 flex-wrap">
          {chooseCardsData.map((item) => (
            <ChooseCard key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="w-full h-[1px] bg-gold"></div>
    </>
  );
};

export default Choose;
