import Elon from '../svgs/bezos.svg';
import SalaryInput from '../components/SalaryInput';

export default function Home(props) {
  const { salary, setSalary, setFormattedSalary } = props;

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
              In 2021, Elon Musk's net worth grew by an estimated{' '}
              <strong className='elon-worth'>$121&nbsp;billion</strong>.
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
          <img id='elon-svg' src={Elon} alt='Elon Musk' />
        </div>
      </div>
    </div>
  );
}
