import "./App.css";
import React, { useState } from "react";

function App() {
  const [userSalary, setUserSalary] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>You Vs. A Billionaire {userSalary}</h1>

        <button onClick={() => setUserSalary(userSalary + 1)}>
          Increase Salary
        </button>
      </header>
    </div>
  );
}

export default App;
