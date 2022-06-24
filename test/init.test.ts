import "@testing-library/jest-dom/extend-expect";

const fs = require("fs");
const path = require("path");

const value = fs.readFileSync(path.join(__dirname, "./source.txt")).toString();

describe("initialTest", () => {
  it("Test!!! Pass", () => {
    expect("1").toBe(value);
  });
});
