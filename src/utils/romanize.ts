/* eslint-disable guard-for-in */
/* eslint no-restricted-syntax:[
"error", "FunctionExpression", "WithStatement", "BinaryExpression[operator='in']"] */

type TNumeralsRoman = {
    M: number,
    CM: number,
    D: number,
    CD: number,
    C: number,
    XC: number,
    L: number,
    XL: number,
    X: number,
    IX: number,
    V: number,
    IV: number,
    I: number,
};

export function romanize(number: number) {
  let initialNumber: number = number;
  let romanized: string = '';
  const numeralsRoman: TNumeralsRoman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  for (const keys in numeralsRoman) {
    while (initialNumber >= numeralsRoman[keys]) {
      romanized += keys.toString();
      initialNumber -= numeralsRoman[keys];
    }
  }

  return romanized;
}
