import PageTwo from '../pages/PageTwo';
import PageThree from '../pages/PageThree';
import PageFour from '../pages/PageFour';
import PageFive from '../pages/PageFive';
import PageSix from '../pages/PageSix';
import PageSeven from '../pages/PageSeven';
import PageEight from '../pages/PageEight';
import PageNine from '../pages/PageNine';
import PageTen from '../pages/PageTen';
import Footer from './Footer';

export default function ContentPages(props) {
  const { salary, formattedSalary, multiplier, povertyMultiplier } = props;

  return (
    <div>
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
      <PageSeven></PageSeven>
      <PageEight></PageEight>
      {salary >= 5000 && (
        <PageNine
          formattedSalary={formattedSalary}
          povertyMultiplier={povertyMultiplier}
        ></PageNine>
      )}
      <PageTen></PageTen>
      <Footer></Footer>
    </div>
  );
}
