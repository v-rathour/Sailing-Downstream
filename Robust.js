const assert = require("assert");
const { IsVAl, length } = require("./MainFile.js");

describe("Filter List", () => {
  it("should process a valid input list", () => {
    const inputList = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ];
    const result = IsVAl(inputList);
    const expectedResult = [1, 5, 7, 11, 13, 17, 19];

    // Use deepStrictEqual to compare arrays
    assert.deepStrictEqual(result, expectedResult);
  });

  it("should throw an error for an invalid input list", () => {
    const inputList = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ];

    // Use throws to check if an error is thrown
    assert.throws(
      () => {
        length(inputList);
      },
      (err) => {
        if (
          err instanceof Error &&
          err.message === "Array length is not a multiple of 10"
        ) {
          return true; // The error matches the expected error
        }
        return false;
      }
    );
  });
});
