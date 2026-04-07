import { SwiperSlide } from "swiper/react";
import FeatureCard from "~/components/ui/card/FeatureCard";
import { casinoGamesData } from "~/constants/casinoGamesData";
import { BACKGROUND_URLS } from "~/constants/backgroundUrls";
import { useLazyBackground } from "~/hooks/useLazyBackground";
import Slider, {
  featureCardSwiperSlideClassName,
} from "~/components/reusable/shared/slider/Slider";

const CasinoGames = () => {
  const { ref, style } = useLazyBackground(BACKGROUND_URLS.game);
  return (
    <div
      ref={ref}
      style={style}
      className="flex flex-col items-center gap-12 bg-black bg-cover bg-center py-12 lg:py-20"
    >
      <h2 className="text-2xl md:text-4xl font-bold w-full uppercase text-center bg-gradient-white-red bg-clip-text text-transparent sm:px-0 px-5">
        Top Casino Games
      </h2>

      <Slider variant="casinoGames">
        {casinoGamesData.map((item) => (
          <SwiperSlide
            key={item.id}
            className={featureCardSwiperSlideClassName}
          >
            <FeatureCard
              image={item.image}
              imageSrcSet={item.imageSrcSet}
              imageSizes={item.imageSizes}
              imageAlt={item.imageAlt}
              imageWidth={item.imageWidth}
              imageHeight={item.imageHeight}
              title={item.title}
              text={item.text}
              showPlayButton={true}
              animateBorder={true}
            />
          </SwiperSlide>
        ))}
      </Slider>
    </div>
  );
};

export default CasinoGames;
