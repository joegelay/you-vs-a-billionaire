import Dunkin from '../svgs/dunkin.svg';
import Villa from '../svgs/villa.svg';
import Espresso from '../svgs/espresso.svg';

export default function chooseLatteComparisonImage(multiplier) {
  const latte = 5;

  const dunkin = 1367350;
  const villa = 350000;

  const elonDunkinAmount = Math.floor((multiplier * latte) / dunkin);
  const elonVillaAmount = Math.floor((multiplier * latte) / villa);

  const result = {};

  if (elonDunkinAmount) {
    result.src = Dunkin;
    result.id = 'dunkin';
    result.alt = 'A donut stand';
    return result;
  } else if (elonVillaAmount) {
    result.src = Villa;
    result.id = 'villa';
    result.alt = 'An Italian Villa';
    return result;
  } else {
    result.src = Espresso;
    result.id = 'espresso';
    result.alt = 'An espresso machine';
    return result;
  }
}
