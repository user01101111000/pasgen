import style from "./IField.module.css";
import { AppContext, useContext } from "../../context/app-context";
import generatePassword from "../../utils/generatePassword";
import detectStrength from "../../utils/detectStrength";
import Range from "./Range/Range";
import Checkboxes from "./Checkboxes/Checkboxes";
import Strength from "./Strength/Strength";
import Generate from "./Generate/Generate";

export default function IField() {
  const { setPassword, rangeVal, chbVals, setCssNames } =
    useContext(AppContext);

  function handleSubmit(e) {
    e.preventDefault();

    const chbValsIsOK = Object.values(chbVals).some((x) => x);

    if (+rangeVal && chbValsIsOK) {
      setPassword(generatePassword(rangeVal, chbVals));

      setCssNames(detectStrength(rangeVal, chbVals));
    }
  }

  return (
    <form className={style.ifiled} onSubmit={handleSubmit}>
      <Range />
      <Checkboxes />
      <Strength />
      <Generate />
    </form>
  );
}
