module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@next/next/recommended",
    "plugin:storybook/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    project: ["./**/tsconfig.json"],
    sourceType: "module"
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "arrow-body-style": "error",
    "react/prop-types": 0
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};