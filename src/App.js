import './App.css';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import ContentPages from './components/ContentPages';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);

  const [salary, setSalary] = useState();
  const [formattedSalary, setFormattedSalary] = useState();

  const extremePovertyWage = 693.5;

  const multiplier = Math.round(121000000000 / salary);
  const povertyMultiplier = Math.round(salary / extremePovertyWage);

  return (
    <div className='app'>
      <Home
        salary={salary}
        setSalary={setSalary}
        setFormattedSalary={setFormattedSalary}
      ></Home>
      {salary && (
        <ContentPages
          salary={salary}
          formattedSalary={formattedSalary}
          multiplier={multiplier}
          povertyMultiplier={povertyMultiplier}
        ></ContentPages>
      )}
    </div>
  );
}

export default App;
