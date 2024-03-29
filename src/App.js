import './App.css';
import { useState, useEffect } from 'react';
import { useFlags, useLDClient } from 'launchdarkly-react-client-sdk';
import Home from './pages/Home';
import ContentPages from './components/ContentPages';
import Aos from 'aos';
import 'aos/dist/aos.css';
import uuid from 'react-uuid';

function App() {
  const [salary, setSalary] = useState();
  const [formattedSalary, setFormattedSalary] = useState();

  const ldClient = useLDClient();

  const { billionaireDataOverride, showLatteComparison } = useFlags();

  const randomKey = uuid();

  const identifyUser = () => {
    ldClient.identify({ key: randomKey, custom: { salary: parseInt(salary) } });
  };

  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);

  const extremePovertyWage = 693.5;

  const elonMuskData = {
    fullName: 'Elon Musk',
    firstName: 'Elon',
    earnings: 121000000000,
  };

  const billionaire = billionaireDataOverride
    ? billionaireDataOverride
    : elonMuskData;

  const multiplier = Math.round(billionaire.earnings / salary);
  const povertyMultiplier = Math.round(salary / extremePovertyWage);

  return (
    <div className='app'>
      <Home
        salary={salary}
        setSalary={setSalary}
        setFormattedSalary={setFormattedSalary}
        identifyUser={identifyUser}
        billionaire={billionaire}
      ></Home>
      {salary && (
        <ContentPages
          salary={salary}
          formattedSalary={formattedSalary}
          multiplier={multiplier}
          povertyMultiplier={povertyMultiplier}
          billionaire={billionaire}
          showLatteComparison={showLatteComparison}
        ></ContentPages>
      )}
    </div>
  );
}

export default App;
