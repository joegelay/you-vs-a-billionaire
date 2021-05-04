import "./App.css";
import { useState } from "react";
import PageOne from "./pages/PageOne";
import ContentPages from "./components/ContentPages";

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
      {salary ? (
        <ContentPages
          salary={salary}
          formattedSalary={formattedSalary}
          multiplier={multiplier}
          povertyMultiplier={povertyMultiplier}
        ></ContentPages>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
