import Tesla from "../svgs/tesla.svg";
import House from "../svgs/house.svg";

export default function PageFour(props) {
  const { multiplier } = props;
  const teslaCost = 157490;
  const houseCost = 334000;

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

  const chooseHouseText = () => {
    const bezosCost = (houseCost / multiplier).toFixed(2);

    if (bezosCost > 0.01) {
      return <strong> ${(houseCost / multiplier).toFixed(2)}</strong>;
    }

    return " less than a penny";
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
            <strong> $157,490</strong>. {chooseTeslaText()}!
          </h2>
        </div>

        <div className="column flex-column col-1-margin">
          <img
            id="house"
            className="page-four-image"
            src={House}
            alt="A house"
          />
          <h2>
            In 2020, the median price for a new home in the United States was
            <strong> $334,000</strong>.
            <br />
            Compared to your salary, Jeff Bezos could buy a house for
            {chooseHouseText()}.
          </h2>
        </div>
      </div>
    </div>
  );
}
