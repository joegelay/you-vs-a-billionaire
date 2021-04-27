import DumpMoney from "../dump-money.svg";
import Increase from "../increase.svg";
import ScrollDown from "../scroll-down.svg";

export default function PageThree(props) {
  const { multiplier } = props;

  return (
    <div className="page page-three">
      <div className="row flex-row align-start">
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

        <div className="column flex-column col-1-margin">
          <img
            id="dump-money"
            className="page-two-image"
            src={DumpMoney}
            alt="A person throwing around money"
          />
          <h2>Here is a third column.</h2>
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
