function detectStrength(range, chbVals) {
  let strength = {};

  const activeCHBS = Object.values(chbVals).filter((x) => x);

  if (range > 14 && activeCHBS.length > 2) {
    strength = {
      name: "Strong",
      cssClasses: ["s1", "s2", "s3"],
    };
  } else if ((range > 9 && activeCHBS.length > 1) || activeCHBS.length > 1) {
    strength = {
      name: "Medium",
      cssClasses: ["m1", "m2", "m3"],
    };
  } else {
    strength = {
      name: "Low",
      cssClasses: ["l1", "l2", "l3"],
    };
  }

  return strength;
}

export default detectStrength;
