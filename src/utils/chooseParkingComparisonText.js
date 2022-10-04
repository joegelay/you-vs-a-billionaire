import ReactTooltip from 'react-tooltip';

export default function chooseParkingComparisonText(multiplier) {
  const parking = 0.25;

  const rollsRoyce = 311900;
  const audiR8 = 142700;
  const hondaCivic = 21250;
  const macBookPro = 1500;

  const elonRollsAmount = Math.floor((multiplier * parking) / rollsRoyce);
  const elonAudiAmount = Math.floor((multiplier * parking) / audiR8);
  const elonCivicAmount = Math.floor((multiplier * parking) / hondaCivic);
  const elonMacBookAmount = Math.floor((multiplier * parking) / macBookPro);

  if (elonRollsAmount) {
    return (
      <span>
        {elonRollsAmount > 1 ? elonRollsAmount.toLocaleString() : 'a'}{' '}
        <span
          className="dotted"
          data-tip="Starting MSRP $311,900 according to TrueCar.com"
          data-for="rolls-royce"
        >
          {' '}
          Rolls&nbsp;Royce&nbsp;Ghost{elonRollsAmount > 1 ? 's' : ''}
          <ReactTooltip id="rolls-royce" effect="solid" place="bottom" />
        </span>
        .
      </span>
    );
  } else if (elonAudiAmount) {
    return (
      <span>
        {elonAudiAmount > 1 ? elonAudiAmount : 'an'}{' '}
        <span
          className="dotted"
          data-for="audi"
          data-tip="Starting MSRP $142,700 according to TrueCar.com"
        >
          Audi&nbsp;R8
          {elonAudiAmount > 1 ? 's' : ''}
          <ReactTooltip id="audi" effect="solid" place="bottom" />
        </span>
        .
      </span>
    );
  } else if (elonCivicAmount) {
    return (
      <span>
        {elonCivicAmount > 1 ? elonCivicAmount : 'a'}{' '}
        <span
          className="dotted"
          data-for="civic"
          data-tip="Starting MSRP $21,250 according to TrueCar.com"
        >
          Honda Civic{elonCivicAmount > 1 ? 's' : ''}
          <ReactTooltip id="civic" effect="solid" place="bottom" />
        </span>
        .
      </span>
    );
  } else {
    return (
      <span>
        {elonMacBookAmount > 1 ? elonMacBookAmount : 'an'}{' '}
        <span
          className="dotted"
          data-for="macbooks"
          data-tip="MacBook Pro valued at $1,500"
        >
          Apple&nbsp;MacBook&nbsp;Pro
          {elonMacBookAmount > 1 ? 's' : ''}
          <ReactTooltip id="macbooks" effect="solid" place="bottom" />
        </span>
        .
      </span>
    );
  }
}
