// Or async function
module.exports = async () => {
  return {
    verbose: true,
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: [
      "<rootDir>/src/__test__/setupTest.js"
    ],
    moduleNameMapper: {
      "\\.(styl|css|scss)$": "<rootDir>/src/__mocks__/styleMock.js"
    }
  };
};
