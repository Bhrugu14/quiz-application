import React from "react";
import IcBack from "../../assets/icons/ic-back.svg";

import { useLocation, useNavigate } from "react-router-dom";
import { HeaderContextTypes, useHeaderContext } from "../../context";
// import { InputText } from "../input";

export const Header = ({ auth = false }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { headerTitle, isBack } = useHeaderContext();

  return (
    <header
      className={`h-16 min-w-full ${
        auth ? "bg-primary/90" : "bg-primary"
      } flex justify-between items-center px-5 top-0 z-30 fixed shadow-xl`}
    >
      <div className="flex flex-1">
        {isBack ? (
          <div className="cursor-pointer" onClick={() => navigate(-1)}>
            <img src={IcBack} className="h-5 w-5 object-contain" alt="back" />
          </div>
        ) : (
          <div className="flex" />
        )}
      </div>
      <div
        className={`font-semibold text-white text-xl flex items-center justify-center flex-2`}
      >
        {headerTitle}
      </div>
      <div className="flex justify-end flex-1"></div>
    </header>
  );
};
