import DumpMoney from "../svgs/dump-money.svg";
import Increase from "../svgs/increase.svg";
import ScrollDown from "../svgs/scroll-down.svg";

export default function PageTwo(props) {
  const { multiplier } = props;

  return (
    <div className="page page-two">
      <div className="row flex-row">
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
          <h3>
            To truly fathom the difference between your spending powers, let's
            take a look at a few examples...
          </h3>
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
