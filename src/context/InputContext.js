import { createContext, useState } from "react";

export const InputContext = createContext();

export const InputContextProvider = ({ children }) => {
  const { Provider } = InputContext;
  const [userInput, setUserInput] = useState({});

  const value = {
    userInput,
    setUserInput,
  };

  return <Provider value={value}>{children}</Provider>;
};
