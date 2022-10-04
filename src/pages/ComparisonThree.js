import Latte from '../svgs/latte.svg';

export default function ComparisonThree(props) {
  const { formattedSalary, povertyMultiplier } = props;

  return (
    <div className='page page-nine globe-background'>
      <div className='row flex-row'>
        <div
          data-aos='zoom-in-left'
          className='column flex-column col-1-margin'
        >
          <h2>
            Compared to the <strong>{formattedSalary}</strong> that you earn per
            year...
          </h2>
          <h2>
            Your dollar would be
            <span className='uptick'>
              {' '}
              {povertyMultiplier.toLocaleString()}&nbsp;times
            </span>{' '}
            more valuable to a person living in extreme poverty.
          </h2>
        </div>
      </div>
      <div className='row flex-row'>
        <div
          data-aos='zoom-in-left'
          data-aos-delay='500'
          className='column flex-column col-1-margin'
        >
          <img
            id='latte'
            className='page-three-image'
            src={Latte}
            alt='A paper to go coffee cup.'
          />
          <h2>
            Remember that <strong>$5</strong> latte from before?
          </h2>
          <h2>
            While it might not seem like much, donating that <strong>$5</strong>{' '}
            to someone living in extreme poverty would benefit them the same way
            an extra{' '}
            <strong>${(povertyMultiplier * 5).toLocaleString()}</strong> would
            benefit you.
          </h2>
        </div>
      </div>
    </div>
  );
}
