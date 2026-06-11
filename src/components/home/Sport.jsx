import { SwiperSlide } from "swiper/react";
import Slider, {
  featureCardSwiperSlideClassName,
} from "~/components/reusable/shared/slider/Slider";
import FeatureCard from "~/components/ui/card/FeatureCard";
import { sportData } from "~/constants/sportData";
import { BACKGROUND_URLS } from "~/constants/backgroundUrls";
import { useLazyBackground } from "~/hooks/useLazyBackground";
import { redirectOnParent } from "~/utils/parentBridge";

const Sport = () => {
  const { ref, style } = useLazyBackground(BACKGROUND_URLS.sport);
  return (
    <div
      ref={ref}
      style={style}
      className="flex flex-col items-center gap-12 bg-black bg-cover bg-center py-12 lg:py-20"
    >
      <h2 className="text-2xl md:text-4xl font-bold w-full uppercase bg-gradient-white-red bg-clip-text text-transparent text-center px-5">
        Top Sports to bet on
      </h2>
      <Slider variant="featureCards">
        {sportData.map((item) => (
          <SwiperSlide
            key={item.id}
            className={featureCardSwiperSlideClassName}
          >
            <div
              className="cursor-pointer h-full"
              onClick={() =>
                redirectOnParent("https://vipclub.lv/#/sportsbook")
              }
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
                showPlayButton={false}
                animateBorder={true}
              />
            </div>
          </SwiperSlide>
        ))}
      </Slider>
    </div>
  );
};

export default Sport;
