function roundToTens(number) {
  return Math.round(number * 10) / 10
}

const convertToCelsius = function(degF) {
  return roundToTens((5 / 9) * (degF - 32));
};

const convertToFahrenheit = function(degC) {
  return roundToTens((degC * (9 / 5)) + 32);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
