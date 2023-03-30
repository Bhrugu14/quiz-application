import React from "react";

interface InputTextProps {
  id?: string;
  name?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: () => void;
  extraClassName?: string;
  maxLength?: number;
  minLength?: number;
  isError?: boolean | string;
  autoComplete?: string;
  disabled?: boolean;
}

export const InputText = ({
  name,
  type,
  value,
  onChange,
  extraClassName = "",
  id,
  placeholder = "",
  maxLength = 50,
  minLength = 0,
  isError = false,
  autoComplete = "on",
  disabled = false,
}: InputTextProps) => {
  return (
    <div className={`flex flex-col w-full relative bg-primaryCard`}>
      <input
        disabled={disabled}
        autoComplete={autoComplete}
        maxLength={maxLength}
        minLength={minLength}
        id={id}
        placeholder={placeholder}
        name={name}
        className={`border-b rounded-b-none ${
          isError ? "border-error" : "border-gray-300"
        } text-sm text-black pb-2 w-full ${
          isError ? "focus:border-error" : "focus:border-lineColor"
        } ${extraClassName} ${
          isError && "animate-pulse_finite"
        } bg-primaryCard`}
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
