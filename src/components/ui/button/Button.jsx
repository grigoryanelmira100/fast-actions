const variants = {
  red: "bg-red-500 border border-red-100 text-lg font-medium text-white whitespace-nowrap hover:cursor-pointer",
  white:
    "text-white border border-red-500 whitespace-nowrap hover:cursor-pointer w-full h-full",
};

const baseStyles =
  "rounded-lg py-4 px-8 transition-colors duration-300 ease-in-out button-shimmer";

export default function Button({
  type = "button",
  variant = "red",
  className = "",
  children,
  onClick,
}) {
  const buttonClass = `${baseStyles} ${variants[variant] || variants.red} ${className}`;

  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick}
      onTouchStart={onClick}
    >
      <span>{children}</span>
    </button>
  );
}
