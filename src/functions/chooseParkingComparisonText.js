import ReactTooltip from "react-tooltip";

export default function chooseParkingComparisonText(multiplier) {
  const parking = 0.25;

  const rollsRoyce = 311900;
  const audiR8 = 142700;
  const hondaCivic = 21250;
  const macBookPro = 1500;

  const bezosRollsAmount = Math.floor((multiplier * parking) / rollsRoyce);
  const bezosAudiAmount = Math.floor((multiplier * parking) / audiR8);
  const bezosCivicAmount = Math.floor((multiplier * parking) / hondaCivic);
  const bezosMacBookAmount = Math.floor((multiplier * parking) / macBookPro);

  if (bezosRollsAmount) {
    return (
      <span>
        {bezosRollsAmount > 1 ? bezosRollsAmount.toLocaleString() : "a"}{" "}
        <span
          className="dotted"
          data-tip="Starting MSRP $311,900 according to TrueCar.com"
          data-for="rolls-royce"
        >
          {" "}
          Rolls&nbsp;Royce&nbsp;Ghost{bezosRollsAmount > 1 ? "s" : ""}
          <ReactTooltip id="rolls-royce" effect="solid" place="bottom" />
        </span>
        .
      </span>
    );
  } else if (bezosAudiAmount) {
    return (
      <span>
        {bezosAudiAmount > 1 ? bezosAudiAmount : "an"}{" "}
        <span
          className="dotted"
          data-for="audi"
          data-tip="Starting MSRP $142,700 according to TrueCar.com"
        >
          Audi&nbsp;R8
          {bezosAudiAmount > 1 ? "s" : ""}
          <ReactTooltip id="audi" effect="solid" place="bottom" />
        </span>
        .
      </span>
    );
  } else if (bezosCivicAmount) {
    return (
      <span>
        {bezosCivicAmount > 1 ? bezosCivicAmount : "a"}{" "}
        <span
          className="dotted"
          data-for="civic"
          data-tip="Starting MSRP $21,250 according to TrueCar.com"
        >
          Honda Civic{bezosCivicAmount > 1 ? "s" : ""}
          <ReactTooltip id="civic" effect="solid" place="bottom" />
        </span>
        .
      </span>
    );
  } else {
    return (
      <span>
        {bezosMacBookAmount > 1 ? bezosMacBookAmount : "an"}{" "}
        <span
          className="dotted"
          data-for="macbooks"
          data-tip="MacBook Pro valued at $1,500"
        >
          Apple&nbsp;MacBook&nbsp;Pro
          {bezosMacBookAmount > 1 ? "s" : ""}
          <ReactTooltip id="macbooks" effect="solid" place="bottom" />
        </span>
        .
      </span>
    );
  }
}
