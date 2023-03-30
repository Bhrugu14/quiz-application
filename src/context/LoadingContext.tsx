import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import Lottie from "lottie-web";
import AnimatedData from "../assets/lottie/loading.json";

interface loadingProps {
  children: React.ReactNode;
}

interface LoadingContextType {
  Loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoadingContext = createContext<LoadingContextType>(
  {} as LoadingContextType
);

export const LoadingContextProvider = ({ children }: loadingProps) => {
  const [Loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const instance = Lottie.loadAnimation({
      container: document.querySelector("#loading"), // the dom element
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: AnimatedData,
    });

    return () => instance.destroy();
  }, [Loading]);

  const contextValue = useMemo(
    () => ({
      Loading,
      setLoading,
    }),
    [Loading]
  );

  return (
    <LoadingContext.Provider value={contextValue}>
      {Loading && (
        <div className="fixed h-screen w-screen bg-loading z-50 flex items-center justify-center">
          <div id="loading" className="w-1/2 h-1/2" />
        </div>
      )}
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoadingContext = () => useContext(LoadingContext);
