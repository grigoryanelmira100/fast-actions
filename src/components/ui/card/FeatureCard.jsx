import Button from "~/components/ui/button/Button";
import { redirectOnParent } from "~/utils/parentBridge";

const FeatureCard = ({
  image,
  imageAlt,
  imageWidth = 764,
  imageHeight = 1020,
  imageSrcSet,
  imageSizes,
  title,
  text,
  showPlayButton = false,
  animateBorder = false,
}) => {
  return (
    <div className="group w-full h-full flex flex-col items-center gap-4">
      <div
        className={`w-full sm:max-w-[280px] h-full rounded-lg p-[1px] min-w-0 flex flex-col min-h-0 box-border ${
          animateBorder ? "casino-card-border" : "bg-gradient-gold-highlight"
        }`}
      >
        <div className="rounded-[7px] overflow-hidden h-full flex flex-col min-h-[282px] min-w-0">
          <div className="relative flex-1 min-h-0 min-w-0 w-full sm:max-w-[280px] mx-auto">
            <img
              src={image}
              srcSet={imageSrcSet}
              sizes={imageSizes}
              alt={imageAlt}
              width={imageWidth}
              height={imageHeight}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full sm:max-w-[280px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 flex flex-col items-start gap-1 p-4">
              <p className="text-base md:text-lg font-normal text-white ">
                {title}
              </p>
              <p className="text-sm font-normal text-gray-200">{text}</p>
            </div>
          </div>
        </div>
      </div>
      {showPlayButton && (
        <Button
          variant="gold"
          className="w-full !py-2"
          onClick={() => redirectOnParent("https://vipclub.lv/#/casino")}
        >
          Play
        </Button>
      )}
    </div>
  );
};

export default FeatureCard;
