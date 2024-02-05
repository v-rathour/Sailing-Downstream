function IsVAl(array) {
  if (array.length % 10 !== 0) {
    console.log("Array length is not a multiple of 10");
  }
  const newArray = array.filter((item) => item % 2 !== 0 && item % 3 !== 0);
  return newArray;
}
function length(array) {
  if (array.length % 10 !== 0) {
    console.log("Array length is not a multiple of 10");
  }
}

try {
  const array = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26,
  ];
  const resultArray = IsVAl(array);
  if (resultArray !== null) {
    console.log(resultArray);
  }
} catch (err) {
  console.error(err);
}

module.exports = { IsVAl, length };
