import ReactTooltip from "react-tooltip";

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
    return (
      <span>
        {bezosDunkinAmount > 1
          ? `${bezosDunkinAmount.toLocaleString()} `
          : "a "}
        <span
          className="dotted"
          data-tip="Average costs for a new franchise are $1,367,350 according to DunkinFranchising.com"
        >
          Dunkin'&nbsp;Donuts
          <ReactTooltip effect="solid" place="bottom" />
        </span>{" "}
        franchise
        {bezosDunkinAmount > 1 ? "s" : ""}.
      </span>
    );
  } else if (bezosVillaAmount) {
    return (
      <span>
        {" "}
        {bezosVillaAmount > 1 ? bezosVillaAmount : "a"}{" "}
        <span className="dotted" data-tip="Cost of villa: $350,000">
          villa
          {bezosVillaAmount > 1 ? "s" : ""}
          <ReactTooltip effect="solid" place="bottom" />
        </span>{" "}
        in Tuscany, Italy.
      </span>
    );
  } else {
    return ` ${
      bezosEspressoAmount > 1 ? bezosEspressoAmount : "a"
    } $10,000 espresso machine${bezosEspressoAmount > 1 ? "s" : ""}.`;
  }
}
