import Intro from '../pages/Intro';
import ComparisonOne from '../pages/ComparisonOne';
import ComparisonTwo from '../pages/ComparisonTwo';
import ShiftOne from '../pages/ShiftOne';
import ShiftTwo from '../pages/ShiftTwo';
import GlobalPoverty from '../pages/GlobalPoverty';
import Percentiles from '../pages/Percentiles';
import ComparisonThree from '../pages/ComparisonThree';
import Closing from '../pages/Closing';
import Footer from './Footer';

export default function ContentPages(props) {
  const {
    salary,
    formattedSalary,
    multiplier,
    povertyMultiplier,
    billionaire,
    showLatteComparison,
  } = props;

  return (
    <div>
      <Intro
        salary={salary}
        formattedSalary={formattedSalary}
        multiplier={multiplier}
        billionaire={billionaire}
      ></Intro>
      <ComparisonOne
        salary={salary}
        formattedSalary={formattedSalary}
        multiplier={multiplier}
        billionaire={billionaire}
      ></ComparisonOne>
      <ComparisonTwo
        salary={salary}
        formattedSalary={formattedSalary}
        multiplier={multiplier}
        billionaire={billionaire}
      ></ComparisonTwo>
      <ShiftOne></ShiftOne>
      <ShiftTwo></ShiftTwo>
      <GlobalPoverty></GlobalPoverty>
      <Percentiles></Percentiles>
      {showLatteComparison && (
        <ComparisonThree
          formattedSalary={formattedSalary}
          povertyMultiplier={povertyMultiplier}
        ></ComparisonThree>
      )}
      <Closing billionaire={billionaire}></Closing>
      <Footer></Footer>
    </div>
  );
}
