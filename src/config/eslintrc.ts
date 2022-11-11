export const eslintrc = `{
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "extends": [
    "standard-with-typescript",
    "plugin:react/recommended"
  ],
  "plugins": [
    "react", 
    "@babel", 
    "@babel/plugin/proposal-class-properties",
    "@babel/plugin-proposal-object-rest-spread"
  ],
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "rules": {
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error"
  }
}`