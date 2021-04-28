import DumpMoney from "../dump-money.svg";
import Increase from "../increase.svg";
import ScrollDown from "../scroll-down.svg";

export default function PageThree(props) {
  const { multiplier } = props;

  const parking = 0.25;
  const latte = 5;
  const twenty = 20;

  const rollsRoyce = 315000;
  const audiR8 = 150000;
  const hondaCivic = 22000;
  const macBookPro = 1500;

  const bezosRollsAmount = Math.floor((multiplier * parking) / rollsRoyce);
  const bezosAudiAmount = Math.floor((multiplier * parking) / audiR8);
  const bezosCivicAmount = Math.floor((multiplier * parking) / hondaCivic);
  const bezosMacBookAmount = Math.floor((multiplier * parking) / macBookPro);

  const chooseParkingComparisonImage = () => {
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
  };

  const chooseParkingComparisonText = () => {
    if (bezosRollsAmount) {
      return ` ${
        bezosRollsAmount > 1 ? bezosRollsAmount : "a"
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
      return ` ${
        bezosMacBookAmount > 1 ? bezosMacBookAmount : "an"
      } Apple MacBook Pro${bezosMacBookAmount > 1 ? "s" : ""}.`;
    }
  };

  return (
    <div className="page page-three">
      <div className="row flex-row align-start">
        <div className="column flex-column col-1-margin">
          <img
            id={chooseParkingComparisonImage().id}
            className="page-two-image"
            src={chooseParkingComparisonImage().src}
            alt={chooseParkingComparisonImage().alt}
          />
          <h2>
            You putting $0.25 in a parking meter is like Bezos buying
            {chooseParkingComparisonText()}
          </h2>
        </div>

        <div className="column flex-column col-1-margin">
          <img
            id="increase"
            className="page-two-image"
            src={Increase}
            alt="A chart show money going up"
          />
          <h2>
            {/* add in uptick animation here */}
            Jeff Bezos's annual earnings are
            <span className="uptick"> {multiplier.toLocaleString()}</span>
            &nbsp;times larger than yours.
          </h2>
        </div>

        <div className="column flex-column col-1-margin">
          <img
            id="dump-money"
            className="page-two-image"
            src={DumpMoney}
            alt="A person throwing around money"
          />
          <h2>
            In other words, you spending <strong>$1</strong>, or Bezos spending
            <strong> ${multiplier.toLocaleString()}</strong>, puts the same dent
            in your wallets.
          </h2>
        </div>
      </div>

      <div className="row flex-row">
        <div className="column flex-column">
          <img
            className="scroll-down"
            src={ScrollDown}
            alt="Scroll down arrows"
          />
        </div>
      </div>
    </div>
  );
}
