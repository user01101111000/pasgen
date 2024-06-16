import giveMeArray from "./giveMeArray";

function generatePassword(range, chbValues) {
  const conditions = Object.entries(chbValues).reduce(
    (acc, x) => (x[1] ? (acc = [...acc, x[0]]) : acc),
    []
  );

  const result = conditions
    .map((x) => giveMeArray(x))
    .flat()
    .sort((a, b) => 0.5 - Math.random());

  result.length = range;

  return result.join("");
}

export default generatePassword;
