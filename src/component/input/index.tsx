import React from "react";

interface InputTextProps {
  id?: string;
  name?: string;
  type?: string;
  placeholder?: string;
  value?: string | number;
  min?: number | string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  extraClassName?: string;
  maxLength?: number;
  minLength?: number;
  isError?: boolean | string;
  autoComplete?: string;
  disabled?: boolean;
  title?: string;
  containerClassName?: string;
}

export const InputText = ({
  name,
  type,
  value,
  onChange,
  extraClassName = "",
  containerClassName = "",
  id,
  min,
  placeholder = "",
  maxLength = 50,
  minLength = 0,
  isError = false,
  autoComplete = "on",
  disabled = false,
  title,
}: InputTextProps) => {
  return (
    <div className={`flex flex-col w-full relative ${containerClassName}`}>
      {title && (
        <label
          className={`block text-md font-bold text-primary px-2 drop-shadow-xl`}
        >
          {title}
        </label>
      )}
      <input
        disabled={disabled}
        autoComplete={autoComplete}
        maxLength={maxLength}
        minLength={minLength}
        id={id}
        min={min}
        placeholder={placeholder}
        name={name}
        className={`border-b rounded-b-none px-2 ${
          isError ? "border-error" : "border-gray-300"
        } text-md ${disabled ? "text-slate-400" : "text-black"} pb-2 w-full ${
          isError ? "focus:border-error" : "focus:border-lineColor"
        } ${extraClassName} ${isError && "animate-pulse_finite"} ${
          disabled ? "bg-stone-100" : "bg-primaryBg"
        }`}
        type={type}
        value={value}
        onChange={onChange}
      />
      {isError && (
        <label className="text-xs absolute -bottom-4 text-error z-10">
          {isError}
        </label>
      )}
    </div>
  );
};
