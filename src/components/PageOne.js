import Bezos from "../svgs/bezos.svg";
import SalaryInput from "./SalaryInput";

export default function PageOne(props) {
  const { salary, setSalary, setFormattedSalary } = props;

  return (
    <div className="page">
      <div className="row-reverse">
        <div className="column flex-column">
          <header>
            <h1>You</h1>
            <p>VS.</p>
            <h1>A&nbsp;Billionaire</h1>
          </header>

          <div className="flex-column opening-blurb">
            <p>
              In 2020, Jeff Bezos's net worth grew by an estimated{" "}
              <strong>$75&nbsp;billion</strong>.
            </p>

            <p>Enter your annual income below to see how you stack&nbsp;up:</p>
          </div>

          <SalaryInput
            salary={salary}
            setSalary={setSalary}
            setFormattedSalary={setFormattedSalary}
          ></SalaryInput>
        </div>
        <div className="column flex-column">
          <img id="bezos-svg" src={Bezos} alt="Jeff Bezos" />
        </div>
      </div>
    </div>
  );
}
