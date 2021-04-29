import chooseLatteComparisonImage from "../functions/chooseLatteComparisonImage.js";
import chooseLatteComparisonText from "../functions/chooseLatteComparisonText.js";
import Tesla from "../svgs/tesla.svg";

export default function PageFour(props) {
  const { multiplier } = props;
  const teslaCost = 157490;

  const chooseTeslaText = () => {
    const bezosCost = (teslaCost / multiplier).toFixed(2);

    if (bezosCost > 0.01) {
      return (
        <span>
          {["That's a mere ", <strong>${bezosCost}</strong>, " to Jeff Bezos"]}
        </span>
      );
    }

    return "That's less than a penny to Jeff Bezos";
  };

  return (
    <div className="page page-four">
      <div className="row flex-row">
        <div className="column flex-column">
          <h3>
            We can also look at these spending power comparisons in reverse...
          </h3>
          <h3>What would BIG purchases for you feel like to Jeff Bezos?</h3>
        </div>
      </div>

      <div className="row flex-row">
        <div className="column flex-column col-1-margin">
          <img
            id="tesla"
            className="page-four-image"
            src={Tesla}
            alt="A Tesla car"
          />
          <h2>
            A fully-loaded, Tesla Model S would set you back
            <strong> $157,490</strong>. {chooseTeslaText()}.
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
            For the relative cost of a Dunkin' Donuts <strong>$5</strong> latte,
            Jeff Bezos could buy {chooseLatteComparisonText(multiplier)}
          </h2>
        </div>
      </div>
    </div>
  );
}
