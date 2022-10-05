import MoneyPockets from '../svgs/money-pockets.svg';
import chooseParkingComparisonImage from '../utils/chooseParkingComparisonImage.js';
import chooseParkingComparisonText from '../utils/chooseParkingComparisonText.js';
import chooseLatteComparisonImage from '../utils/chooseLatteComparisonImage.js';
import chooseLatteComparisonText from '../utils/chooseLatteComparisonText.js';

export default function ComparisonOne(props) {
  const { multiplier, billionaire } = props;
  const { fullName, firstName } = billionaire;

  return (
    <div className='page page-three'>
      <div className='row flex-row align-start'>
        <div data-aos='flip-left' className='column flex-column col-1-margin'>
          <img
            id={chooseParkingComparisonImage(multiplier).id}
            className='page-three-image'
            src={chooseParkingComparisonImage(multiplier).src}
            alt={chooseParkingComparisonImage(multiplier).alt}
          />
          <h2>
            You putting <strong>$0.25</strong> in a parking meter is like{' '}
            {firstName} buying {chooseParkingComparisonText(multiplier)}
          </h2>
        </div>

        <div
          data-aos='flip-left'
          data-aos-delay='500'
          className='column flex-column col-1-margin'
        >
          <img
            id={chooseLatteComparisonImage(multiplier).id}
            className='page-three-image'
            src={chooseLatteComparisonImage(multiplier).src}
            alt={chooseLatteComparisonImage(multiplier).alt}
          />
          <h2>
            For the relative cost of a Dunkin' Donuts <strong>$5</strong> latte,{' '}
            {fullName} could buy {chooseLatteComparisonText(multiplier)}
          </h2>
        </div>

        <div
          data-aos='flip-left'
          data-aos-delay='1000'
          className='column flex-column col-1-margin'
        >
          <img
            id='money-pockets'
            className='page-three-image'
            src={MoneyPockets}
            alt="A person's pockets overflowing with money."
          />
          <h2>
            How about the joy of finding a forgotten <strong>$20</strong> in
            your pocket?
            <br />
            {firstName} would have to find
            <strong> ${(multiplier * 20).toLocaleString()}</strong> to feel that
            same excitement.
          </h2>
        </div>
      </div>
    </div>
  );
}
