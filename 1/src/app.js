// var output = computeAverageLengthOfWords('code', 'programs');
// console.log(output);

const dosFrasesLargo = ["code", "programs"];
const output = dosFrasesLargo.reduce((previousValue, currentValue) => (previousValue + currentValue).length);