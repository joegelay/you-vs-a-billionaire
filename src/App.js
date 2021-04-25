import "./App.css";
import { useState } from "react";
import PageOne from "./components/PageOne";
import PageTwo from "./components/PageTwo";

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
    </div>
  );
}

export default App;
