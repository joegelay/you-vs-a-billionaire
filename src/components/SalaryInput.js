import NumberFormat from "react-number-format";

export default function SalaryInput(props) {
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
      <button className="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}