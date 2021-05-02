export default function chooseLatteComparisonText(multiplier) {
  const latte = 5;

  const dunkin = 1367350;
  const villa = 350000;
  const espressoMachine = 10000;

  const bezosDunkinAmount = Math.floor((multiplier * latte) / dunkin);
  const bezosVillaAmount = Math.floor((multiplier * latte) / villa);
  const bezosEspressoAmount = Math.floor(
    (multiplier * latte) / espressoMachine
  );

  if (bezosDunkinAmount) {
    return ` ${
      bezosDunkinAmount > 1 ? bezosDunkinAmount.toLocaleString() : "a"
    } Dunkin'${String.fromCharCode(160)}Donuts franchise${
      bezosDunkinAmount > 1 ? "s" : ""
    }.`;
  } else if (bezosVillaAmount) {
    return ` ${bezosVillaAmount > 1 ? bezosVillaAmount : "a"} villa${
      bezosVillaAmount > 1 ? "s" : ""
    } in Tuscany, Italy.`;
  } else {
    return ` ${
      bezosEspressoAmount > 1 ? bezosEspressoAmount : "a"
    } $10,000 espresso machine${bezosEspressoAmount > 1 ? "s" : ""}.`;
  }
}
