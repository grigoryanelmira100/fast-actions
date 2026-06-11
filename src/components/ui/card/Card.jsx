const Card = ({ icon, alt, title }) => {
  return (
    <div className="w-[299px] flex flex-col items-center justify-center gap-5 rounded-xl border border-white bg-gold-300  py-4 px-6">
      <img src={icon} alt={alt} width={56} height={56} />
      <p className="text-xl  font-bold text-gray-100 text-center text-nowrap font-inter">
        {title}
      </p>
    </div>
  );
};

export default Card;
