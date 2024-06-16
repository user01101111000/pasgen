import style from "./Range.module.css";
import { AppContext, useContext } from "../../../context/app-context";
import { memo } from "react";
function Range() {
  const { rangeVal, setRangeVal } = useContext(AppContext);

  return (
    <article className={style.rangeBox}>
      <div className={style.rangeBoxTextA}>
        <h1>Character Length</h1>
        <p>{rangeVal}</p>
      </div>
      <input
        type="range"
        min="0"
        max="20"
        className={style.rangeInput}
        value={rangeVal}
        onChange={(e) => setRangeVal(e.target.value)}
      />
    </article>
  );
}

export default memo(Range);
