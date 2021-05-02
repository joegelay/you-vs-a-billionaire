import "./App.css";
import { useState } from "react";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import PageFour from "./pages/PageFour";
import PageFive from "./pages/PageFive";
import PageSix from "./pages/PageSix";
import PageSeven from "./pages/PageSeven";
import PageEight from "./pages/PageEight";
import PageNine from "./pages/PageNine";
import PageTen from "./pages/PageTen";

function App() {
  const [salary, setSalary] = useState();
  const [formattedSalary, setFormattedSalary] = useState();

  const extremePovertyWage = 693.5;

  const multiplier = Math.round(75000000000 / salary);
  const povertyMultiplier = Math.round(salary / extremePovertyWage);

  return (
    <div className="app">
      <PageOne
        salary={salary}
        setSalary={setSalary}
        setFormattedSalary={setFormattedSalary}
      ></PageOne>
      <PageTwo
        salary={salary}
        formattedSalary={formattedSalary}
        multiplier={multiplier}
      ></PageTwo>
      <PageThree
        salary={salary}
        formattedSalary={formattedSalary}
        multiplier={multiplier}
      ></PageThree>
      <PageFour
        salary={salary}
        formattedSalary={formattedSalary}
        multiplier={multiplier}
      ></PageFour>
      <PageFive></PageFive>
      <PageSix></PageSix>
      <PageSeven></PageSeven>
      <PageEight></PageEight>
      {salary >= 5000 ? (
        <PageNine
          formattedSalary={formattedSalary}
          povertyMultiplier={povertyMultiplier}
        ></PageNine>
      ) : (
        ""
      )}
      <PageTen></PageTen>
    </div>
  );
}

export default App;
