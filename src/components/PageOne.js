import NumberFormat from "react-number-format";
import Bezos from "../bezos.svg";

export default function PageOne(props) {
  const { salary, setSalary, setFormattedSalary } = props;

  const handleSubmit = () => {
    alert(salary);
  };

  const MAX_VAL = 100000000;
  const MIN_VAL = 0;
  const withValueLimit = (inputObj) => {
    const { value } = inputObj;
    if (value >= MIN_VAL && MAX_VAL > value) return inputObj;
  };

  return (
    <div className="page">
      <div className="row">
        <div className="column flex-column">
          <header>
            <h1>You</h1>
            <p>VS.</p>
            <h1>A Billionaire</h1>
          </header>

          <div className="flex-column">
            <p>
              In 2020, Jeff Bezos's net worth grew by an estimated{" "}
              <strong>$74 billion</strong>.
            </p>

            <p>Enter your annual income below to see how you stack up:</p>
          </div>

          <div className="salary-input">
            <NumberFormat
              thousandSeparator={true}
              prefix={"$"}
              inputmode="numeric"
              decimalScale={0}
              value={salary}
              isAllowed={withValueLimit}
              onValueChange={(values) => {
                const { value, formattedValue } = values;
                // formattedValue = $2,223
                // value ie, 2223
                setFormattedSalary(formattedValue);
                setSalary(value);
              }}
            />
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
        <div className="column">
          <img src={Bezos} alt="Jeff Bezos" />
        </div>
      </div>
    </div>
  );
}
