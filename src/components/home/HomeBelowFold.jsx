import Sport from "~/components/home/Sport.jsx";
import Games from "~/components/home/Games.jsx";
import CasinoGames from "~/components/home/CasinoGames.jsx";
import Promotions from "~/components/home/Promotions.jsx";
import Choose from "~/components/home/Choose.jsx";
import Payments from "~/components/home/Payments.jsx";

export default function HomeBelowFold() {
  return (
    <>
      <Sport />
      <Games />
      <CasinoGames />
      <Promotions />
      <Choose />
      <Payments />
    </>
  );
}
