import RollsRoyce from '../svgs/rolls-royce.svg';
import Audi from '../svgs/audi.svg';
import Honda from '../svgs/honda.svg';
import Laptop from '../svgs/laptop.svg';

export default function chooseParkingComparisonImage(multiplier) {
  const parking = 0.25;

  const rollsRoyce = 315000;
  const audiR8 = 150000;
  const hondaCivic = 22000;

  const billionaireRollsAmount = Math.floor(
    (multiplier * parking) / rollsRoyce
  );
  const billionaireAudiAmount = Math.floor((multiplier * parking) / audiR8);
  const billionaireCivicAmount = Math.floor(
    (multiplier * parking) / hondaCivic
  );

  const result = {};

  if (billionaireRollsAmount) {
    result.src = RollsRoyce;
    result.id = 'rolls-royce';
    result.alt = 'A Rolls Royce car and logo';
    return result;
  } else if (billionaireAudiAmount) {
    result.src = Audi;
    result.id = 'audi';
    result.alt = 'An Audi R8 sports car';
    return result;
  } else if (billionaireCivicAmount) {
    result.src = Honda;
    result.id = 'honda';
    result.alt = 'Honda logo';
    return result;
  } else {
    result.src = Laptop;
    result.id = 'laptop';
    result.alt = 'An Apple laptop';
    return result;
  }
}
