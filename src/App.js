import './App.css';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import ContentPages from './components/ContentPages';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [salary, setSalary] = useState();
  const [formattedSalary, setFormattedSalary] = useState();

  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);

  const extremePovertyWage = 693.5;

  const billionaire = {
    fullName: 'Jeff Bezos',
    firstName: 'Jeff',
    earnings: 121000000000,
  };

  const multiplier = Math.round(billionaire.earnings / salary);
  const povertyMultiplier = Math.round(salary / extremePovertyWage);

  return (
    <div className='app'>
      <Home
        salary={salary}
        setSalary={setSalary}
        setFormattedSalary={setFormattedSalary}
        billionaire={billionaire}
      ></Home>
      {salary && (
        <ContentPages
          salary={salary}
          formattedSalary={formattedSalary}
          multiplier={multiplier}
          povertyMultiplier={povertyMultiplier}
          billionaire={billionaire}
        ></ContentPages>
      )}
    </div>
  );
}

export default App;
