import React from "react";

interface ButtonProps {
  title: string;
  icon?: string;
  disabled?: boolean;
  onClick: () => void;
  id?: string;
  secondary?: boolean;
  extraClass?: string;
  titleClassName?: string;
  white?: boolean;
}

export const Button = ({
  title,
  icon,
  disabled,
  onClick,
  id,
  secondary,
  extraClass,
  white,
  titleClassName,
}: ButtonProps) => {
  let backgroundColor = white
    ? "bg-primaryBg"
    : secondary
    ? "bg-primaryBg"
    : "bg-primary";

  let buttonText = white
    ? "text-primary"
    : secondary
    ? "text-slate-700"
    : "text-white";

  return (
    <button
      id={id}
      onClick={onClick}
      disabled={disabled}
      className={`${backgroundColor} py-3 w-full rounded-xl ${
        disabled ? "pointer-events-none opacity-60" : "shadow-xl"
      } flex justify-center items-center active:scale-95 ${
        secondary && "border border-primary"
      } ${extraClass || ""}`}
    >
      <div className="flex">
        <label
          className={`z-0 font-semibold text-base cursor-pointer ${buttonText} ${titleClassName}`}
        >
          {title}
        </label>
        {icon && (
          <img src={icon} className="h-6 w-6 object-contain ml-2" alt="i" />
        )}
      </div>
    </button>
  );
};
