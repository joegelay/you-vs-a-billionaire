import './App.css';
import {useState, useEffect} from 'react';
import PageOne from './pages/PageOne';
import ContentPages from './components/ContentPages';
import Aos from 'aos';
import 'aos/dist/aos.css';
import ReactGA from 'react-ga';

function App() {
  const setGA = () => {
    ReactGA.initialize('G-379L5WYVDV');
    ReactGA.pageview('Init page view');
  };

  useEffect(() => {
    Aos.init({duration: 600});
    setGA();
  }, []);

  const [salary, setSalary] = useState();
  const [formattedSalary, setFormattedSalary] = useState();

  const extremePovertyWage = 693.5;

  const multiplier = Math.round(121000000000 / salary);
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
        ''
      )}
    </div>
  );
}

export default App;
