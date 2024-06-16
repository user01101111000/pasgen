import style from "./Board.module.css";
import { AppContext, useContext } from "../../context/app-context";
import { FaRegCopy } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";

export default function Board() {
  const { password, copied, setCopied } = useContext(AppContext);

  function handleClick() {
    if (password) {
      setCopied(true);
      navigator.clipboard.writeText(password);
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    }
  }

  return (
    <div className={style.boardArea}>
      {password ? (
        <h1>{password}</h1>
      ) : (
        <h1
          style={{
            opacity: 0.5,
          }}
        >
          G5i2!2aQ
        </h1>
      )}
      {copied ? (
        <div className={style.markWrapper}>
          <h1>Copied</h1>
          <GiCheckMark className={style.icon2} />
        </div>
      ) : (
        <FaRegCopy className={style.icon} onClick={handleClick} />
      )}
    </div>
  );
}
