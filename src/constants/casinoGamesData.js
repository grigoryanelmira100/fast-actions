/** Matches Tailwind `sm` (640px) and feature card image width (~280px). */
const GAME_CARD_IMAGE_SIZES =
  "(min-width: 640px) 280px, min(100vw - 32px, 281px)";

const gameCardImages = (id) => ({
  image: `/images/game-${id}.webp`,
  imageSrcSet: `/images/game-${id}.webp 280w, /images/game-${id}@2x.webp 560w`,
  imageSizes: GAME_CARD_IMAGE_SIZES,
});

export const casinoGamesData = [
  {
    id: 1,
    imageWidth: 280,
    imageHeight: 374,
    ...gameCardImages(1),
    imageAlt: "Blackjack",
    title: "BLACKJACK",
    text: "Classic card action.",
  },
  {
    id: 2,
    imageWidth: 280,
    imageHeight: 368,
    ...gameCardImages(2),
    imageAlt: "Auto Roulette",
    title: "AUTO ROULETTE",
    text: "Spin and win.",
  },
  {
    id: 3,
    imageWidth: 280,
    imageHeight: 374,
    ...gameCardImages(3),
    imageAlt: "Baccarat",
    title: "BACCARAT",
    text: "Simple. Fast. Exciting.",
  },
  {
    id: 4,
    imageWidth: 280,
    imageHeight: 373,
    ...gameCardImages(4),
    imageAlt: "Poker",
    title: "POKER",
    text: "Skill meets luck.",
  },
  {
    id: 5,
    imageWidth: 280,
    imageHeight: 374,
    ...gameCardImages(5),
    imageAlt: "Slots",
    title: "SLOTS",
    text: "Spin for wins.",
  },
  {
    id: 6,
    imageWidth: 280,
    imageHeight: 374,
    ...gameCardImages(6),
    imageAlt: "Adventure style games",
    title: "ADVENTURE STYLE GAMES",
    text: "Play the journey.",
  },
  {
    id: 7,
    imageWidth: 280,
    imageHeight: 374,
    ...gameCardImages(7),
    imageAlt: "Keno",
    title: "KENO",
    text: "Pick numbers, chase luck.",
  },
  {
    id: 8,
    imageWidth: 280,
    imageHeight: 374,
    ...gameCardImages(8),
    imageAlt: "Craps",
    title: "CRAPS",
    text: "Roll the dice, feel the rush.",
  },
];
