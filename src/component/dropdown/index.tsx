import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import IcDownArrow from "../../assets/icons/ic-dropdown.svg";

interface DropdownItemProps {
  name?: string;
  value?: string;
  id?: number;
}

interface DropdownProps {
  items: any[];
  value: any | string;
  onChange?(value: any): void;
  title?: string;
  showValue?: string;
  disabled?: boolean;
  extraClass?: string;
  containerClassName?: string;
  showError?: boolean;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const Dropdown = ({
  items,
  value,
  onChange,
  title,
  showValue = "select",
  disabled = false,
  extraClass = "",
  containerClassName = "",
  showError = true,
}: DropdownProps) => {
  return (
    <div className={`flex flex-col w-full ${containerClassName}`}>
      <Listbox disabled={disabled} value={value} onChange={onChange}>
        {({ open }) => {
          return (
            <>
              {title && (
                <Listbox.Label
                  className={`block text-md font-bold text-primary px-2 drop-shadow-xl`}
                >
                  {title}
                </Listbox.Label>
              )}
              <div className="relative mt-1 cursor-pointer">
                <Listbox.Button
                  className={`relative w-full bg-primaryBg cursor-pointer border-b ${
                    open ? "border-lineColor" : "border-gray-300"
                  } py-2 px-2 text-left shadow-sm focus:outline-none ${extraClass}`}
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
                        key={"items" + i.id + k}
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
                              <span
                                className={classNames(
                                  selected ? "font-semibold" : "font-normal",
                                  "ml-3 block truncate"
                                )}
                              >
                                {i.name}
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
          );
        }}
      </Listbox>
    </div>
  );
};
