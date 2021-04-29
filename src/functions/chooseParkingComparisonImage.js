import RollsRoyce from "../rolls-royce.svg";
import Audi from "../audi.svg";
import Honda from "../honda.svg";
import Laptop from "../laptop.svg";

export default function chooseParkingComparisonImage(multiplier) {
  const parking = 0.25;

  const rollsRoyce = 315000;
  const audiR8 = 150000;
  const hondaCivic = 22000;

  const bezosRollsAmount = Math.floor((multiplier * parking) / rollsRoyce);
  const bezosAudiAmount = Math.floor((multiplier * parking) / audiR8);
  const bezosCivicAmount = Math.floor((multiplier * parking) / hondaCivic);

  const result = {};

  if (bezosRollsAmount) {
    result.src = RollsRoyce;
    result.id = "rolls-royce";
    result.alt = "A Rolls Royce car and logo";
    return result;
  } else if (bezosAudiAmount) {
    result.src = Audi;
    result.id = "audi";
    result.alt = "An Audi R8 sports car";
    return result;
  } else if (bezosCivicAmount) {
    result.src = Honda;
    result.id = "honda";
    result.alt = "Honda logo";
    return result;
  } else {
    result.src = Laptop;
    result.id = "laptop";
    result.alt = "An Apple laptop";
    return result;
  }
}
