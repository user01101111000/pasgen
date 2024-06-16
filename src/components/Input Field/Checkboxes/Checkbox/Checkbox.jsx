import { useEffect, useRef } from "react";
import { AppContext, useContext } from "../../../../context/app-context";
import style from "./Checkbox.module.css";
export default function Checkbox({ data }) {
  const { chbVals, setChbVals } = useContext(AppContext);

  const checkBox = useRef();

  useEffect(() => {
    checkBox.current.checked = chbVals[data];
  }, [chbVals]);

  function handleChb(e, key) {
    const copyChbVals = { ...chbVals };

    copyChbVals[key] = e.target.checked;

    setChbVals(copyChbVals);
  }

  const h1Letter = {
    upper: "Uppercase Letters",
    lower: "Lowercase Letters",
    number: "Numbers",
    symbol: "Symbols",
  };

  return (
    <label className={style.labelBox}>
      <input
        type="checkbox"
        className={style.checkBox}
        onChange={(e) => handleChb(e, `${data}`)}
        ref={checkBox}
      />
      <h1>Include {h1Letter[data]}</h1>
    </label>
  );
}
