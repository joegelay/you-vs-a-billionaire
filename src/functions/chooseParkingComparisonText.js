import ReactTooltip from "react-tooltip";

export default function chooseParkingComparisonText(multiplier) {
  const parking = 0.25;

  const rollsRoyce = 315000;
  const audiR8 = 150000;
  const hondaCivic = 22000;
  const macBookPro = 1500;

  const bezosRollsAmount = Math.floor((multiplier * parking) / rollsRoyce);
  const bezosAudiAmount = Math.floor((multiplier * parking) / audiR8);
  const bezosCivicAmount = Math.floor((multiplier * parking) / hondaCivic);
  const bezosMacBookAmount = Math.floor((multiplier * parking) / macBookPro);

  if (bezosRollsAmount) {
    return ` ${
      bezosRollsAmount > 1 ? bezosRollsAmount.toLocaleString() : "a"
    } Rolls Royce Ghost${bezosRollsAmount > 1 ? "s" : ""}.`;
  } else if (bezosAudiAmount) {
    return ` ${bezosAudiAmount > 1 ? bezosAudiAmount : "an"} Audi R8${
      bezosAudiAmount > 1 ? "s" : ""
    }.`;
  } else if (bezosCivicAmount) {
    return ` ${bezosCivicAmount > 1 ? bezosCivicAmount : "a"} Honda Civic${
      bezosCivicAmount > 1 ? "s" : ""
    }.`;
  } else {
    return (
      <span>
        {bezosMacBookAmount > 1 ? bezosMacBookAmount : "an"}{" "}
        <span className="dotted" data-tip="MacBook Pro valued at $1,5000">
          Apple&nbsp;MacBook&nbsp;Pro
          {bezosMacBookAmount > 1 ? "s" : ""}
          <ReactTooltip />
        </span>
        .
      </span>
    );
  }
}
