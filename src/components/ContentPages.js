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
  } = props;

  return (
    <div>
      <Intro
        salary={salary}
        formattedSalary={formattedSalary}
        multiplier={multiplier}
      ></Intro>
      <ComparisonOne
        salary={salary}
        formattedSalary={formattedSalary}
        multiplier={multiplier}
      ></ComparisonOne>
      <ComparisonTwo
        salary={salary}
        formattedSalary={formattedSalary}
        multiplier={multiplier}
      ></ComparisonTwo>
      <ShiftOne></ShiftOne>
      <ShiftTwo></ShiftTwo>
      <GlobalPoverty></GlobalPoverty>
      <Percentiles></Percentiles>
      {salary >= 5000 && (
        <ComparisonThree
          formattedSalary={formattedSalary}
          povertyMultiplier={povertyMultiplier}
        ></ComparisonThree>
      )}
      <Closing></Closing>
      <Footer></Footer>
    </div>
  );
}
