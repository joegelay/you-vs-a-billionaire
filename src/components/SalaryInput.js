import NumberFormat from 'react-number-format';
import * as Scroll from 'react-scroll';

export default function SalaryInput(props) {
  const { salary, setSalary, setFormattedSalary, identifyUser } = props;

  const scroll = Scroll.scroller;

  const handleSubmit = (e) => {
    e.preventDefault();
    identifyUser();
    scroll.scrollTo('page-two', { smooth: true, duration: 1000 });
  };

  const MAX_VAL = 10000000;
  const MIN_VAL = 0;
  const withValueLimit = (inputObj) => {
    const { value } = inputObj;
    if (value >= MIN_VAL && MAX_VAL >= value) return inputObj;
  };

  return (
    <form className='salary-input' onSubmit={handleSubmit}>
      <NumberFormat
        thousandSeparator={true}
        prefix={'$'}
        inputMode='numeric'
        decimalScale={0}
        value={salary}
        isAllowed={withValueLimit}
        onValueChange={(values) => {
          const { value, formattedValue } = values;
          // formattedValue = $2,223
          // value = 2223
          setFormattedSalary(formattedValue);
          setSalary(value);
        }}
      />
      <button className='submit' type='submit'>
        Submit
      </button>
    </form>
  );
}
