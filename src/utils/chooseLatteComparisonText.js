import ReactTooltip from 'react-tooltip';

export default function chooseLatteComparisonText(multiplier) {
  const latte = 5;

  const dunkin = 1367350;
  const villa = 350000;
  const espressoMachine = 10000;

  const elonDunkinAmount = Math.floor((multiplier * latte) / dunkin);
  const elonVillaAmount = Math.floor((multiplier * latte) / villa);
  const elonEspressoAmount = Math.floor((multiplier * latte) / espressoMachine);

  if (elonDunkinAmount) {
    return (
      <span>
        {elonDunkinAmount > 1 ? `${elonDunkinAmount.toLocaleString()} ` : 'a '}
        <span
          className="dotted"
          data-for="dunkin"
          data-tip="Average cost of a new franchise is $1,367,350 according to DunkinFranchising.com"
        >
          Dunkin'&nbsp;Donuts
          <ReactTooltip id="dunkin" effect="solid" place="bottom" />
        </span>{' '}
        franchise
        {elonDunkinAmount > 1 ? 's' : ''}.
      </span>
    );
  } else if (elonVillaAmount) {
    return (
      <span>
        {' '}
        {elonVillaAmount > 1 ? elonVillaAmount : 'a'}{' '}
        <span
          className="dotted"
          data-tip="Cost of villa: $350,000"
          data-for="villa"
        >
          villa
          {elonVillaAmount > 1 ? 's' : ''}
          <ReactTooltip id="villa" effect="solid" place="bottom" />
        </span>{' '}
        in Tuscany, Italy.
      </span>
    );
  } else {
    return ` ${
      elonEspressoAmount > 1 ? elonEspressoAmount : 'a'
    } $10,000 espresso machine${elonEspressoAmount > 1 ? 's' : ''}.`;
  }
}
