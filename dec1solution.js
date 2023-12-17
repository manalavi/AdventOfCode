const fs = require("fs");

fs.readFile("./dec1problem.txt", (err, data) => {
  if (err) throw err;

  let calibratedValues = [...data.toString().replaceAll("\r", "").split("\n")];
  let finalAnswer = 0;

  calibratedValues.forEach((value) => {
    let digitsArray = value.match(/\d/g);
    let firstDigit = digitsArray[0];
    let lastDigit = digitsArray[digitsArray.length - 1];
    finalAnswer += parseInt(`${firstDigit}${lastDigit}`);
  });

  console.log(finalAnswer);
});
