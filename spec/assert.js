var assert = {
  isTrue: function(assertionToCheck, testName) {
    if (!assertionToCheck) {
      // throw new Error("Assertion failed: " + testName);
      console.log("\x1b[41m%s\x1b[0m", "Assertion failed: " + testName);
    } else {
      console.log("\x1b[42m%s\x1b[0m", "Assertion passed: " + testName);
    }
  }
}
