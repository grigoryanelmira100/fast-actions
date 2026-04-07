import { useLazyBackground } from "~/hooks/useLazyBackground";
import { paymentData } from "~/constants/paymentData";

const Payments = () => {
  const { ref: sectionRef, isReady: bgReady } = useLazyBackground();

  return (
    <>
      <div
        ref={sectionRef}
        className="flex flex-col items-center gap-6 bg-black px-5 py-12 md:px-20 md:py-12"
      >
        <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold w-full bg-gradient-white-red bg-clip-text text-center text-transparent uppercase">
          Fast. Secure. Seamless Payments.
        </h2>
        <p className="text-base md:text-lg font-normal text-center text-gray-400">
          Deposit and withdraw with confidence using our fast, reliable cashier
          system designed for speed, security, and simplicity.
        </p>

        <div className="w-full flex flex-col justify-start gap-6">
          {paymentData.map(({ id, icon, iconWidth, iconHeight, title }) => (
            <div
              key={id}
              className={`flex items-center bg-cover bg-center bg-no-repeat border border-white rounded-xl gap-6 py-8 px-6 min-h-[146px] h-[146px] ${bgReady ? "bg-payment-card" : ""}`}
            >
              <img
                src={icon}
                alt={title}
                width={iconWidth}
                height={iconHeight}
                className="flex-shrink-0"
                loading="lazy"
                decoding="async"
              />
              <h3 className="text-xl md:text-3xl font-semibold text-white">
                {title}
              </h3>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-[1px] bg-red-gradient" />
    </>
  );
};

export default Payments;
