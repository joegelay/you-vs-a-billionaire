import ReactTooltip from 'react-tooltip';

export default function chooseParkingComparisonText(multiplier) {
  const parking = 0.25;

  const rollsRoyce = 311900;
  const audiR8 = 142700;
  const hondaCivic = 21250;
  const macBookPro = 1500;

  const billionaireRollsAmount = Math.floor(
    (multiplier * parking) / rollsRoyce
  );
  const billionaireAudiAmount = Math.floor((multiplier * parking) / audiR8);
  const billionaireCivicAmount = Math.floor(
    (multiplier * parking) / hondaCivic
  );
  const billionaireMacBookAmount = Math.floor(
    (multiplier * parking) / macBookPro
  );

  if (billionaireRollsAmount) {
    return (
      <span>
        {billionaireRollsAmount > 1
          ? billionaireRollsAmount.toLocaleString()
          : 'a'}{' '}
        <span
          className='dotted'
          data-tip='Starting MSRP $311,900 according to TrueCar.com'
          data-for='rolls-royce'
        >
          {' '}
          Rolls&nbsp;Royce&nbsp;Ghost{billionaireRollsAmount > 1 ? 's' : ''}
          <ReactTooltip id='rolls-royce' effect='solid' place='bottom' />
        </span>
        .
      </span>
    );
  } else if (billionaireAudiAmount) {
    return (
      <span>
        {billionaireAudiAmount > 1 ? billionaireAudiAmount : 'an'}{' '}
        <span
          className='dotted'
          data-for='audi'
          data-tip='Starting MSRP $142,700 according to TrueCar.com'
        >
          Audi&nbsp;R8
          {billionaireAudiAmount > 1 ? 's' : ''}
          <ReactTooltip id='audi' effect='solid' place='bottom' />
        </span>
        .
      </span>
    );
  } else if (billionaireCivicAmount) {
    return (
      <span>
        {billionaireCivicAmount > 1 ? billionaireCivicAmount : 'a'}{' '}
        <span
          className='dotted'
          data-for='civic'
          data-tip='Starting MSRP $21,250 according to TrueCar.com'
        >
          Honda Civic{billionaireCivicAmount > 1 ? 's' : ''}
          <ReactTooltip id='civic' effect='solid' place='bottom' />
        </span>
        .
      </span>
    );
  } else {
    return (
      <span>
        {billionaireMacBookAmount > 1 ? billionaireMacBookAmount : 'an'}{' '}
        <span
          className='dotted'
          data-for='macbooks'
          data-tip='MacBook Pro valued at $1,500'
        >
          Apple&nbsp;MacBook&nbsp;Pro
          {billionaireMacBookAmount > 1 ? 's' : ''}
          <ReactTooltip id='macbooks' effect='solid' place='bottom' />
        </span>
        .
      </span>
    );
  }
}
