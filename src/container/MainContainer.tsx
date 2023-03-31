import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../component";

const MainContainer = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen min-w-full flex flex-col justify-between bg-background">
      <div className="w-full">
        <Header />
        <div className={`flex flex-col py-4 pt-24 place-items-center`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
