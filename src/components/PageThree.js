import DumpMoney from "../dump-money.svg";
import ScrollDown from "../scroll-down.svg";
import chooseParkingComparisonImage from "../functions/chooseParkingComparisonImage.js";
import chooseParkingComparisonText from "../functions/chooseParkingComparisonText.js";
import chooseLatteComparisonImage from "../functions/chooseLatteComparisonImage.js";
import chooseLatteComparisonText from "../functions/chooseLatteComparisonText.js";

export default function PageThree(props) {
  const { multiplier } = props;

  return (
    <div className="page page-three">
      <div className="row flex-row align-start">
        <div className="column flex-column col-1-margin">
          <img
            id={chooseParkingComparisonImage(multiplier).id}
            className="page-two-image"
            src={chooseParkingComparisonImage(multiplier).src}
            alt={chooseParkingComparisonImage(multiplier).alt}
          />
          <h2>
            You putting <strong>$0.25</strong> in a parking meter is like Bezos
            buying
            {chooseParkingComparisonText(multiplier)}
          </h2>
        </div>

        <div className="column flex-column col-1-margin">
          <img
            id={chooseLatteComparisonImage(multiplier).id}
            className="page-two-image"
            src={chooseLatteComparisonImage(multiplier).src}
            alt={chooseLatteComparisonImage(multiplier).alt}
          />
          <h2>
            For the relative cost of a $5 latte at Dunkin' Donuts, Jeff Bezos
            could buy
            {chooseLatteComparisonText(multiplier)}
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
