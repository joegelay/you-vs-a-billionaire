import Dunkin from "../dunkin.svg";
import Villa from "../villa.svg";
import Espresso from "../espresso.svg";

export default function chooseLatteComparisonImage(multiplier) {
  const latte = 5;

  const dunkin = 1367350;
  const villa = 350000;

  const bezosDunkinAmount = Math.floor((multiplier * latte) / dunkin);
  const bezosVillaAmount = Math.floor((multiplier * latte) / villa);

  const result = {};

  if (bezosDunkinAmount) {
    result.src = Dunkin;
    result.id = "dunkin";
    result.alt = "A donut stand";
    return result;
  } else if (bezosVillaAmount) {
    result.src = Villa;
    result.id = "villa";
    result.alt = "An Italian Villa";
    return result;
  } else {
    result.src = Espresso;
    result.id = "espresso";
    result.alt = "An espresso machine";
    return result;
  }
}
