import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../component";
import { useHeaderContext } from "../../context";

export const ErrorElement = () => {
  const navigate = useNavigate();
  const headerCtx = useHeaderContext();

  useEffect(() => {
    headerCtx.setHeader("Quiz Application");
  });

  return (
    <div className="min-h-screen min-w-full bg-background px-5">
      <Header />
      <div className="flex p-4 items-center justify-center pt-20 flex-col">
        <label className="text-center font-bold text-xl cursor-pointer text-slate-900">
          Page Not Found
        </label>
        <div className="flex items-center">
          <label
            onClick={() => navigate("/")}
            className="text-center font-bold text-xl cursor-pointer text-blue-700"
          >
            Go To Category Page
          </label>
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            strokeLinejoin="round"
            stroke-width="2"
            className="w-4 h-4 animate-ping ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};
