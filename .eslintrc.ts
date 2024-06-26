module.exports = {
    env: {
      browser: true,
      es6: true,
      node: true,
    },
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: "module",
    },
    plugins: ["react", "@typescript-eslint", "prettier"],
    rules: {
      "prettier/prettier": "error",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  };
  