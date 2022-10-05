import SalaryInput from '../components/SalaryInput';
import Elon from '../svgs/elon.svg';
import Bezos from '../svgs/bezos.svg';

export default function Home(props) {
  const { salary, setSalary, setFormattedSalary, billionaire } = props;

  const { fullName, firstName, earnings } = billionaire;

  return (
    <div className='page'>
      <div className='row-reverse'>
        <div className='column flex-column'>
          <header>
            <h1>You</h1>
            <p>VS.</p>
            <h1>A&nbsp;Billionaire</h1>
          </header>

          <div className='flex-column opening-blurb'>
            <p>
              In 2021, {fullName}'s net worth grew by an estimated{' '}
              <strong className='billionaire-worth'>
                ${earnings / 1000000000}&nbsp;billion
              </strong>
              .
            </p>

            <p>Enter your annual income below to see how you stack&nbsp;up:</p>
          </div>

          <SalaryInput
            salary={salary}
            setSalary={setSalary}
            setFormattedSalary={setFormattedSalary}
          ></SalaryInput>
        </div>
        <div className='column flex-column'>
          <img
            id='billionaire-svg'
            src={firstName === 'Elon' ? Elon : Bezos}
            alt={fullName}
          />
        </div>
      </div>
    </div>
  );
}
