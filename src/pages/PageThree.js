import MoneyPockets from '../svgs/money-pockets.svg';
import chooseParkingComparisonImage from '../functions/chooseParkingComparisonImage.js';
import chooseParkingComparisonText from '../functions/chooseParkingComparisonText.js';
import chooseLatteComparisonImage from '../functions/chooseLatteComparisonImage.js';
import chooseLatteComparisonText from '../functions/chooseLatteComparisonText.js';

export default function PageThree(props) {
  const {multiplier} = props;

  return (
    <div className="page page-three">
      <div className="row flex-row align-start">
        <div data-aos="flip-left" className="column flex-column col-1-margin">
          <img
            id={chooseParkingComparisonImage(multiplier).id}
            className="page-three-image"
            src={chooseParkingComparisonImage(multiplier).src}
            alt={chooseParkingComparisonImage(multiplier).alt}
          />
          <h2>
            You putting <strong>$0.25</strong> in a parking meter is like Elon
            buying {chooseParkingComparisonText(multiplier)}
          </h2>
        </div>

        <div
          data-aos="flip-left"
          data-aos-delay="500"
          className="column flex-column col-1-margin"
        >
          <img
            id={chooseLatteComparisonImage(multiplier).id}
            className="page-three-image"
            src={chooseLatteComparisonImage(multiplier).src}
            alt={chooseLatteComparisonImage(multiplier).alt}
          />
          <h2>
            For the relative cost of a Dunkin' Donuts <strong>$5</strong> latte,
            Elon Musk could buy {chooseLatteComparisonText(multiplier)}
          </h2>
        </div>

        <div
          data-aos="flip-left"
          data-aos-delay="1000"
          className="column flex-column col-1-margin"
        >
          <img
            id="money-pockets"
            className="page-three-image"
            src={MoneyPockets}
            alt="A person's pockets overflowing with money."
          />
          <h2>
            How about the joy of finding a forgotten <strong>$20</strong> in
            your pocket?
            <br />
            Elon would have to find
            <strong> ${(multiplier * 20).toLocaleString()}</strong> to feel that
            same excitement.
          </h2>
        </div>
      </div>
    </div>
  );
}
