import React, { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { AllContext } from "./context";
import router from "./routes";

const queryClient = new QueryClient();

export const NoInternet = () => {
  const [isOnline, setOnline] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", (e) => {
      setOnline(false);
    });

    window.addEventListener("online", (e) => {
      setOnline(true);
    });
  }, []);
  return (
    <div
      className={`fixed top-0 w-screen bg-red-900/90 z-[100] pointer-events-none flex items-center justify-center transition-all`}
    >
      <label
        className={`text-xs text-white transition-all ${
          !isOnline ? "flex" : "hidden"
        }`}
      >
        offline
      </label>
    </div>
  );
};

function App() {
  const isIOS = navigator.userAgent.match(/OS/i) != null;
  if (isIOS) document.body.classList.add("ios-status-bar");
  return (
    <AllContext>
      <NoInternet />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AllContext>
  );
}

export default App;
