const data = `root: pppw + sjmn
dbpl: 5
cczh: sllz + lgvd
zczc: 2
ptdq: humn - dvpt
dvpt: 3
lfqf: 4
humn: 5
ljgn: 2
sjmn: drzm * dbpl
sllz: 4
pppw: cczh / lfqf
lgvd: ljgn * ptdq
drzm: hmdt - zczc
hmdt: 32`;

// convert the data into an array of arrays
const dataArr = data.split('\n').map((item) => item.split(': '));
console.log(dataArr);

// convert the array of arrays into an array of objects
const dataObject = Object.fromEntries(dataArr);
console.log(dataObject);

// loop through the object and convert the values to numbers or arrays
for (const key in dataObject) {
  if (/\d/.test(dataObject[key])) {
    dataObject[key] = Number(dataObject[key]);
    console.log(key, dataObject[key]);
  } else {
    dataObject[key] = dataObject[key].split(' ');
    console.log(dataObject[key]);
  }
}

// loop through the object and calculate the values, until root value is calculated
while (typeof dataObject.root !== 'number') {
  for (const key in dataObject) {
    if (typeof dataObject[key] !== 'number') {
      console.log(dataObject[key]);
      const [num1, operator, num2] = dataObject[key];
      if (
        typeof dataObject[num1] === 'number' &&
        typeof dataObject[num2] === 'number'
      ) {
        if (operator === '+') {
          dataObject[key] = dataObject[num1] + dataObject[num2];
        } else if (operator === '-') {
          dataObject[key] = dataObject[num1] - dataObject[num2];
        } else if (operator === '*') {
          dataObject[key] = dataObject[num1] * dataObject[num2];
        } else if (operator === '/') {
          dataObject[key] = dataObject[num1] / dataObject[num2];
        }
      }
    }
  }
}

console.log(dataObject.root);
