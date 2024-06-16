import { useState, useContext, createContext, useEffect } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);
  const [rangeVal, setRangeVal] = useState(0);

  const [cssNames, setCssNames] = useState({
    name: "",
    cssClasses: ["indicator", "indicator", "indicator"],
  });

  const [chbVals, setChbVals] = useState({
    upper: false,
    lower: false,
    number: false,
    symbol: false,
  });

  useEffect(() => {
    if (rangeVal == 0) {
      setCssNames({
        name: "",
        cssClasses: ["indicator", "indicator", "indicator"],
      });

      setChbVals({
        upper: false,
        lower: false,
        number: false,
        symbol: false,
      });
    }
  }, [rangeVal]);

  return (
    <AppContext.Provider
      value={{
        password,
        setPassword,
        copied,
        setCopied,
        rangeVal,
        setRangeVal,
        chbVals,
        setChbVals,
        cssNames,
        setCssNames,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider, useContext };
