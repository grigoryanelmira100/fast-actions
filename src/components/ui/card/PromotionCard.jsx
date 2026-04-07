import { useLazyBackground } from "~/hooks/useLazyBackground";

const CARD_BG = "/images/background/card-bg.webp";

const PromotionCard = ({ icon, iconAlt, bonusText, rollover }) => {
  const { ref, isReady } = useLazyBackground();

  return (
    <div
      ref={ref}
      className="flex h-full w-full flex-col items-center gap-6 rounded-xl bg-cover bg-no-repeat bg-red-900 p-6"
      style={isReady ? { backgroundImage: `url('${CARD_BG}')` } : undefined}
    >
      {icon && (
        <img
          src={icon}
          alt={iconAlt ?? "Reward"}
          className="h-14 w-14 object-contain"
          loading="lazy"
          decoding="async"
        />
      )}
      <div className="flex flex-col items-center gap-2 text-center">
        <h3 className="text-xl md:text-3xl font-bold w-full uppercase bg-gradient-white-red bg-clip-text text-transparent">
          {bonusText}
        </h3>
        <p className="text-base md:text-lg font-bold text-white">{rollover}</p>
      </div>
    </div>
  );
};

export default PromotionCard;
