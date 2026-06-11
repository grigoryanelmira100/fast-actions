const SPORT_CARD_IMAGE_DIMS = { imageWidth: 280, imageHeight: 200 };

/** Matches Tailwind `sm` (640px) and sport slider card width (~280px). */
const SPORT_CARD_IMAGE_SIZES =
  "(min-width: 640px) 280px, min(100vw - 32px, 281px)";

const sportCardImages = (id) => ({
  image: `/images/sport-${id}.webp`,
  imageSrcSet: `/images/sport-${id}.webp 280w, /images/sport-${id}@2x.webp 560w`,
  imageSizes: SPORT_CARD_IMAGE_SIZES,
});

export const sportData = [
  {
    id: 1,
    ...SPORT_CARD_IMAGE_DIMS,
    ...sportCardImages(1),
    imageAlt: "Football",
    title: "FOOTBALL",
    text: "NFL, College & More.",
  },
  {
    id: 2,
    ...SPORT_CARD_IMAGE_DIMS,
    ...sportCardImages(2),
    imageAlt: "Baseball",
    title: "BASEBALL",
    text: "MLB & leagues worldwide.",
  },
  {
    id: 3,
    ...SPORT_CARD_IMAGE_DIMS,
    ...sportCardImages(3),
    imageAlt: "Basketball",
    title: "BASKETBALL",
    text: "NBA, NCAA & international.",
  },
  {
    id: 4,
    ...SPORT_CARD_IMAGE_DIMS,
    ...sportCardImages(4),
    imageAlt: "Hockey",
    title: "HOCKEY",
    text: "NHL and ice hockey.",
  },
  {
    id: 5,
    ...SPORT_CARD_IMAGE_DIMS,
    ...sportCardImages(5),
    imageAlt: "Tennis",
    title: "TENNIS",
    text: "Grand Slams & ATP/WTA.",
  },
  {
    id: 6,
    ...SPORT_CARD_IMAGE_DIMS,
    ...sportCardImages(6),
    imageAlt: "Soccer",
    title: "SOCCER",
    text: "Leagues and cups worldwide.",
  },
  {
    id: 7,
    ...SPORT_CARD_IMAGE_DIMS,
    ...sportCardImages(7),
    imageAlt: "MMA",
    title: "MMA",
    text: "Fight night thrills.",
  },
  {
    id: 8,
    ...SPORT_CARD_IMAGE_DIMS,
    ...sportCardImages(8),
    imageAlt: "Horse Racing",
    title: "HORSE RACING",
    text: "Race day excitement.",
  },
  {
    id: 9,
    ...SPORT_CARD_IMAGE_DIMS,
    ...sportCardImages(9),
    imageAlt: "Golf",
    title: "GOLF",
    text: "Calm swings, big payouts",
  },
  {
    id: 10,
    ...SPORT_CARD_IMAGE_DIMS,
    ...sportCardImages(10),
    imageAlt: "Volleyball",
    title: "VOLLEYBALL",
    text: "Nonstop rallies, tight sets.",
  },
];
