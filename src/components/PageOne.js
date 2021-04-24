import NumberFormat from "react-number-format";

export default function PageOne(props) {
  const { salary, setSalary, setFormattedSalary } = props;

  const handleSubmit = () => {
    alert(salary);
  };

  return (
    <div className="page">
      <h1>You Vs. A Billionaire</h1>

      <NumberFormat
        thousandSeparator={true}
        prefix={"$"}
        inputmode="numeric"
        decimalScale={0}
        value={salary}
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
  );
}
