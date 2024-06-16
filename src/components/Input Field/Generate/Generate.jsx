import style from "./Generate.module.css";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Generate() {
  return (
    <button className={style.generate}>
      Generate <FaArrowRightLong className={style.icon} />
    </button>
  );
}
