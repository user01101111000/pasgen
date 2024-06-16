import style from "./Strength.module.css";
import "./Strength.css";
import { AppContext, useContext } from "../../../context/app-context";
export default function Strength() {
  const { cssNames } = useContext(AppContext);

  const {
    name,
    cssClasses: [css1, css2, css3],
  } = cssNames;

  return (
    <article className={style.strengthArea}>
      <h1>Strength</h1>

      <div className={style.strengthBox}>
        <h1>{name}</h1>

        <div className={style.strengthIndicators}>
          <div className={css1}></div>
          <div className={css2}></div>
          <div className={css3}></div>
        </div>
      </div>
    </article>
  );
}
