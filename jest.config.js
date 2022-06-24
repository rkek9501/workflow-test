const tsconfig = require("./tsconfig.json");

const jestAliasMapper = () => {
  const obj = {};

  for (const [key, val] of Object.entries(tsconfig.compilerOptions.paths)) {
    const newKey = key.replace("/*", "/(.*)$");
    const newVal = val[0].replace("/*", "/$1");
    obj[newKey] = "<rootDir>/" + newVal;
  }

  return obj;
};

module.exports = {
  preset: "ts-jest",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)?$": "babel-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "./src/test/__mocks__/fileMock.ts",
    "\\.(scss|sass|css)$": "identity-obj-proxy",
    ...jestAliasMapper()
  },
  snapshotSerializers: ["jest-snapshot-serializer-ansi"]
};
