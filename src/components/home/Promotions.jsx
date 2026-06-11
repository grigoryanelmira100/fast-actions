import Button from "~/components/ui/button/Button";
import PromotionCard from "~/components/ui/card/PromotionCard";
import { promotionsData } from "~/constants/promotionsData";
import { BACKGROUND_URLS } from "~/constants/backgroundUrls";
import { useLazyBackground } from "~/hooks/useLazyBackground";

const Promotions = () => {
  const { ref, style } = useLazyBackground(BACKGROUND_URLS.promotion);
  return (
    <div
      ref={ref}
      style={style}
      className="flex flex-col items-center gap-6 bg-black bg-cover bg-center px-5 py-12 md:py-20"
    >
      <div className="flex w-auto items-center justify-center rounded-full bg-red-900 px-4 py-2">
        <p className="text-base font-semibold text-white uppercase">
          New offers
        </p>
      </div>
      <h2 className="text-2xl md:text-4xl font-bold w-full bg-gradient-white-red bg-clip-text text-center  text-transparent uppercase">
        Exclusive Promotions
      </h2>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {promotionsData.map((promo) => (
          <PromotionCard
            key={promo.id}
            tag={promo.tag}
            icon={promo.icon}
            iconAlt={promo.iconAlt}
            bonusText={promo.bonusText}
            rollover={promo.rollover}
          />
        ))}
      </div>
      <Button variant="gold">View Promotions</Button>
    </div>
  );
};

export default Promotions;
