import "./App.css";
import { useState } from "react";
import PageOne from "./components/PageOne";
import PageTwo from "./components/PageTwo";
import PageThree from "./components/PageThree";
import PageFour from "./components/PageFour";
import PageFive from "./components/PageFive";
import PageSix from "./components/PageSix";

function App() {
  const [salary, setSalary] = useState();
  const [formattedSalary, setFormattedSalary] = useState();

  const multiplier = Math.round(75000000000 / salary);

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
    </div>
  );
}

export default App;
