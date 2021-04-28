import DumpMoney from "../dump-money.svg";

export default function chooseParkingComparisonImage(multiplier) {
  const parking = 0.25;

  const rollsRoyce = 315000;
  const audiR8 = 150000;
  const hondaCivic = 22000;
  const macBookPro = 1500;

  const bezosRollsAmount = Math.floor((multiplier * parking) / rollsRoyce);
  const bezosAudiAmount = Math.floor((multiplier * parking) / audiR8);
  const bezosCivicAmount = Math.floor((multiplier * parking) / hondaCivic);
  const bezosMacBookAmount = Math.floor((multiplier * parking) / macBookPro);

  const result = {};

  if (bezosRollsAmount) {
    result.src = DumpMoney;
    result.id = "dump-money";
    result.alt = "A person dumping money";
    return result;
    // } else if (bezosAudiAmount > 0) {
    // } else if (bezosCivicAmount > 0) {
  } else {
    result.src = DumpMoney;
    result.id = "dump-money";
    result.alt = "A person dumping money";
    return result;
  }
}
