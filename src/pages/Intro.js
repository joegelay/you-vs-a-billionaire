import DumpMoney from '../svgs/dump-money.svg';
import Increase from '../svgs/increase.svg';

export default function Intro(props) {
  const { multiplier, billionaire } = props;
  const { fullName, firstName } = billionaire;

  return (
    <div id='page-two' className='page page-two'>
      <div className='row flex-row'>
        <div
          data-aos='zoom-in'
          data-aos-delay='250'
          className='column flex-column col-1-margin'
        >
          <img
            id='increase'
            className='page-two-image'
            src={Increase}
            alt='A chart show money going up'
          />
          <h2>
            {fullName}'s annual earnings are
            <span className='uptick'>
              {' '}
              {multiplier.toLocaleString()}&nbsp;times
            </span>{' '}
            larger than yours.
          </h2>
        </div>

        <div
          data-aos='zoom-in'
          data-aos-delay='500'
          className='column flex-column col-1-margin'
        >
          <img
            id='dump-money'
            className='page-two-image'
            src={DumpMoney}
            alt='A person throwing around money'
          />
          <h2>
            In other words, you spending <strong>$1</strong>, or {firstName}{' '}
            spending
            <strong> ${multiplier.toLocaleString()}</strong>, puts the same size
            dents in your wallets.
          </h2>
        </div>
      </div>

      <div className='row flex-row'>
        <div className='column flex-column'>
          <h3 data-aos='fade' data-aos-delay='750' className='scroll-message'>
            To truly fathom the difference between your spending powers, let's
            take a look at a few examples...
          </h3>
        </div>
      </div>
    </div>
  );
}
