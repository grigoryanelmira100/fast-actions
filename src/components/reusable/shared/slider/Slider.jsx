import { useRef } from "react";
import { Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import arrowLeftIcon from "~/assets/icons/arrow-left.svg";
import arrowRightIcon from "~/assets/icons/arrow-right.svg";

export const featureCardSwiperSlideClassName =
  "sm:!w-[281px] sm:max-w-[281px] shrink-0 overflow-visible box-border";

const Slider = ({ children, swiperProps = {}, variant = "default" }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const isCasinoGames = variant === "casinoGames";
  const isFeatureCardSlider =
    variant === "casinoGames" || variant === "featureCards";

  const baseSwiperProps = {
    slidesPerView: 1.2,
    spaceBetween: 16,
    breakpoints: {
      640: { slidesPerView: 2.2 },
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 4 },
      1280: { slidesPerView: 4.5 },
    },
    modules: [Navigation, Pagination],
    navigation: true,
    pagination: {
      clickable: true,
      bulletClass:
        "swiper-pagination-bullet !w-2 !h-2 !bg-gray-600 !opacity-100",
      bulletActiveClass:
        "swiper-pagination-bullet-active !w-[30px] !rounded-[15px] !bg-red-500 !opacity-100",
    },
    onBeforeInit: (swiper) => {
      if (!swiper.params?.navigation) return;
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
    },
    onSwiper: (swiper) => {
      setTimeout(() => {
        if (swiper.destroyed || !swiper.params?.navigation) return;
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.navigation?.init?.();
        swiper.navigation?.update?.();
      });
    },
  };

  const defaultProps = {
    ...baseSwiperProps,
    ...swiperProps,
    ...(isFeatureCardSlider
      ? {
          slidesPerView: "auto",
          spaceBetween: 24,
          breakpoints: {},
        }
      : {}),
  };

  if (isCasinoGames) {
    return (
      <div className="relative w-full px-2">
        <div className="mx-auto relative max-w-[calc(100%-110px)] sm:max-w-[calc(100%-160px)]">
          <Swiper {...defaultProps} className="!pb-12">
            {children}
          </Swiper>
          <button
            ref={prevRef}
            type="button"
            aria-label="Previous slide"
            className="absolute top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold-500 flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity -translate-x-1 left-[-50px] sm:left-[-65px]"
          >
            <img
              src={arrowLeftIcon}
              alt=""
              width={18}
              height={18}
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
          </button>
          <button
            ref={nextRef}
            type="button"
            aria-label="Next slide"
            className="absolute top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold-500 flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity translate-x-1 right-[-50px] sm:right-[-65px]"
          >
            <img
              src={arrowRightIcon}
              alt=""
              width={18}
              height={18}
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full px-2">
      <Swiper {...defaultProps} className="!pb-12">
        {children}
      </Swiper>
      <button
        ref={prevRef}
        type="button"
        aria-label="Previous slide"
        className="absolute left-[10px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold-500 flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity -translate-x-1"
      >
        <img
          src={arrowLeftIcon}
          alt=""
          width={18}
          height={18}
          className="w-4 h-4 sm:w-5 sm:h-5"
        />
      </button>
      <button
        ref={nextRef}
        type="button"
        aria-label="Next slide"
        className="absolute right-[10px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold-500 flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity translate-x-1"
      >
        <img
          src={arrowRightIcon}
          alt=""
          width={18}
          height={18}
          className="w-4 h-4 sm:w-5 sm:h-5"
        />
      </button>
    </div>
  );
};

export default Slider;
