import style from "./Checkboxes.module.css";

import Checkbox from "./Checkbox/Checkbox";

export default function Checkboxes() {
  const checkBoxItems = ["upper", "lower", "number", "symbol"].map((x, i) => (
    <Checkbox key={i} data={x} />
  ));

  return <article className={style.checkboxArea}>{checkBoxItems}</article>;
}
