import Tesla from '../svgs/tesla.svg';
import House from '../svgs/house.svg';
import ReactTooltip from 'react-tooltip';

export default function ComparisonTwo(props) {
  const { multiplier, billionaire } = props;
  const { fullName, firstName } = billionaire;

  const teslaCost = 150990;
  const houseCost = 346990;

  const chooseTeslaText = () => {
    const billionaireCost = (teslaCost / multiplier).toFixed(2);

    if (billionaireCost >= 0.01) {
      return (
        <span>
          {[
            "That's a mere ",
            <strong>${billionaireCost}</strong>,
            ` to ${firstName}`,
          ]}
        </span>
      );
    }

    return `That's less than a penny to ${fullName}`;
  };

  const chooseHouseText = () => {
    const billionaireCost = (houseCost / multiplier).toFixed(2);

    if (billionaireCost >= 0.01) {
      return <strong> ${(houseCost / multiplier).toFixed(2)}</strong>;
    }

    return ' less than a penny';
  };

  return (
    <div className='page page-four'>
      <div className='row flex-row'>
        <div data-aos='zoom-in' className='column flex-column'>
          <h3 className='scroll-message'>
            We could also look at what BIG purchases for you would feel like to{' '}
            {fullName}...
          </h3>
        </div>
      </div>

      <div className='row flex-row'>
        <div data-aos='zoom-in' className='column flex-column col-1-margin'>
          <img
            id='tesla'
            className='page-four-image'
            src={Tesla}
            alt='A Tesla car'
          />
          <h2>
            A fully-loaded, Tesla Model S would set you back{' '}
            <strong
              className='dotted'
              data-tip='MSRP with all upgrades selected on Tesla.com'
              data-for='tesla'
            >
              ${teslaCost.toLocaleString()}
            </strong>
            . {chooseTeslaText()}!
            <ReactTooltip id='tesla' effect='solid' place='bottom' />
          </h2>
        </div>

        <div
          data-aos='zoom-in'
          // data-aos-delay="1000"
          className='column flex-column col-1-margin'
        >
          <img
            id='house'
            className='page-four-image'
            src={House}
            alt='A house'
          />
          <h2>
            In 2021, the median home listing in the United States was{' '}
            <strong
              className='dotted'
              data-for='home'
              data-tip='Data sourced from CNN.com as of January, 2022'
            >
              ${houseCost.toLocaleString()}
            </strong>
            <ReactTooltip id='home' effect='solid' place='bottom' />. Relative
            to how much you earn, that's {chooseHouseText()} for {fullName}.
          </h2>
        </div>
      </div>
    </div>
  );
}
