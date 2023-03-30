import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import IcDownArrow from "../../assets/icons/ic-dropdown.svg";

interface DropdownItemProps {
  avatar?: string;
  label?: string;
}

interface DropdownProps {
  items: DropdownItemProps[];
  value: string;
  onChange?: () => void;
  title?: string;
  showValue?: string;
  disabled?: boolean;
  isError?: boolean;
  extraClass?: string;
  showError?: boolean;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const Dropdown = ({
  items,
  value = "",
  onChange,
  title,
  showValue = "select",
  disabled = false,
  isError = false,
  extraClass = "",
  showError = true,
}: DropdownProps) => {
  return (
    <Listbox disabled={disabled} value={value} onChange={onChange}>
      {({ open }) => (
        <>
          {title && (
            <Listbox.Label className={`block text-sm font-medium text-primary`}>
              {title}
            </Listbox.Label>
          )}
          <div className="relative mt-1 cursor-pointer">
            <Listbox.Button
              className={`relative w-full cursor-pointer border-b ${
                isError
                  ? "border-error"
                  : open
                  ? "border-lineColor"
                  : "border-gray-300"
              } bg-primaryCard py-2 text-left shadow-sm focus:outline-none  ${extraClass}`}
            >
              <span className="flex items-center">
                <span
                  className={`block truncate ${
                    disabled ? "text-greyOut" : "text-black"
                  }`}
                >
                  {showValue}
                </span>
              </span>
              {!disabled && (
                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                  <img
                    src={IcDownArrow}
                    className="h-3 w-3 text-gray-400 object-contain"
                    aria-hidden="true"
                    alt=">"
                  />
                </span>
              )}
              {showError && (
                <label className="absolute -bottom-4 text-xs text-error">
                  {isError}
                </label>
              )}
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute cursor-pointer z-20 max-h-56 w-full overflow-auto bg-white shadow-xl rounded-b-xl text-base ring-1 ring-black ring-opacity-5 focus:outline-none">
                {items.map((i, k) => (
                  <Listbox.Option
                    key={"items" + k}
                    className={({ active }) =>
                      classNames(
                        active ? "text-white bg-primary" : "text-gray-900",
                        "relative cursor-default select-none py-2"
                      )
                    }
                    value={i}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center cursor-pointer">
                          {i.avatar && (
                            <img
                              src={i.avatar}
                              alt=""
                              className="h-6 w-6 flex-shrink-0 rounded-full"
                            />
                          )}
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "ml-3 block truncate"
                            )}
                          >
                            {i.label}
                          </span>
                        </div>
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};
