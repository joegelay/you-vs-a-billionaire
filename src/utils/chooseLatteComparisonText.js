import ReactTooltip from 'react-tooltip';

export default function chooseLatteComparisonText(multiplier) {
  const latte = 5;

  const dunkin = 1367350;
  const villa = 350000;
  const espressoMachine = 10000;

  const billionaireDunkinAmount = Math.floor((multiplier * latte) / dunkin);
  const billionaireVillaAmount = Math.floor((multiplier * latte) / villa);
  const billionaireEspressoAmount = Math.floor(
    (multiplier * latte) / espressoMachine
  );

  if (billionaireDunkinAmount) {
    return (
      <span>
        {billionaireDunkinAmount > 1
          ? `${billionaireDunkinAmount.toLocaleString()} `
          : 'a '}
        <span
          className='dotted'
          data-for='dunkin'
          data-tip='Average cost of a new franchise is $1,367,350 according to DunkinFranchising.com'
        >
          Dunkin'&nbsp;Donuts
          <ReactTooltip id='dunkin' effect='solid' place='bottom' />
        </span>{' '}
        franchise
        {billionaireDunkinAmount > 1 ? 's' : ''}.
      </span>
    );
  } else if (billionaireVillaAmount) {
    return (
      <span>
        {' '}
        {billionaireVillaAmount > 1 ? billionaireVillaAmount : 'a'}{' '}
        <span
          className='dotted'
          data-tip='Cost of villa: $350,000'
          data-for='villa'
        >
          villa
          {billionaireVillaAmount > 1 ? 's' : ''}
          <ReactTooltip id='villa' effect='solid' place='bottom' />
        </span>{' '}
        in Tuscany, Italy.
      </span>
    );
  } else {
    return ` ${
      billionaireEspressoAmount > 1 ? billionaireEspressoAmount : 'a'
    } $10,000 espresso machine${billionaireEspressoAmount > 1 ? 's' : ''}.`;
  }
}
