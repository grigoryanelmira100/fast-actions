import bitcoinIcon from "~/assets/icons/bitcoin.svg";
import cardIcon from "~/assets/icons/card-outline.svg";
import instantdepositIcon from "~/assets/icons/instant-deposit.svg";
import payIcon from "~/assets/icons/pay.svg";

export const paymentData = [
  { id: 1, icon: instantdepositIcon, title: "Instant Deposits" },
  { id: 2, icon: cardIcon, title: "Support for all major credit cards" },
  { id: 3, icon: payIcon, title: "Instant Payouts" },
  {
    id: 4,
    icon: bitcoinIcon,
    title: "Cryptocurrency payments (Bitcoin, ETH, USDT...)",
  },
];
