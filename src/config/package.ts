export const packageJson = (projeto: string) => `
{
  "name": "${ projeto }",
  "version": "1.0.0",
  "main": "dist/main.js",
  "license": "MIT",
  "scripts": {
    "test": "jest --passWithNoTests --no-cache --runInBand",
    "test:watch": "yarn test -- --watch",
    "test:staged": "yarn test -- --findRelatedTest",
    "test:ci": "yarn test -- --coverage",
    "dev": "webpack serve --mode development --open --hot",
    "storybook": "start-storybook -p 3010",
    "build-storybook": "build-storybook"
  },
  "devDependencies": {
     "@storybook/addon-actions": "^6.5.13",
    "@storybook/addon-essentials": "^6.5.13",
    "@storybook/addon-interactions": "^6.5.13",
    "@storybook/addon-links": "^6.5.13",
    "@storybook/builder-vite": "^0.2.5",
    "@storybook/react": "^6.5.13",
    "@storybook/testing-library": "^0.0.13",
    "@babel/core": "^7.18.10",
    "@babel/plugin-proposal-class-properties": "^7.18.6",
    "@babel/plugin-proposal-object-rest-spread": "^7.18.9",
    "@babel/plugin-transform-modules-commonjs": "^7.18.6",
    "@babel/preset-env": "^7.18.10",
    "@babel/preset-react": "^7.18.6",
    "@faker-js/faker": "^7.4.0",
    "@svgr/webpack": "^6.3.1",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.3.0",
    "@types/axios": "^0.14.0",
    "@types/chance": "^1.1.3",
    "@types/jest": "^28.1.6",
    "@types/react": "^18.0.15",
    "@types/react-dom": "^18.0.6",
    "@types/styled-components": "^5.1.25",
    "@typescript-eslint/eslint-plugin": "^5.31.0",
    "babel-eslint": "^10.1.0",
    "babel-jest": "^27.3.1",
    "babel-loader": "^8.2.5",
    "clean-webpack-plugin": "^4.0.0",
    "dotenv-webpack": "^8.0.0",
    "eslint": "^8.20.0",
    "eslint-config-standard-with-typescript": "^22.0.0",
    "eslint-plugin-import": "^2.26.0",
    "eslint-plugin-node": "^11.1.0",
    "eslint-plugin-promise": "^6.0.0",
    "eslint-plugin-react": "^7.30.1",
    "eslint-plugin-standard": "^5.0.0",
    "git-commit-msg-linter": "^4.1.3",
    "html-webpack-plugin": "^5.5.0",
    "husky": "^8.0.1",
    "jest": "^27.3.1",
    "jest-styled-components": "^7.1.1",
    "jest-environment-jsdom": "^27.3.1",
    "jest-transform-stub": "^2.0.0",
    "jsdom": "^20.0.2",
    "lint-staged": "^13.0.3",
    "redux-saga-testing": "^2.0.2",
    "style-loader": "^3.3.1",
    "svg-url-loader": "^7.1.1",
    "ts-jest": "^27.0.7",
    "ts-loader": "^9.3.1",
    "webpack": "^5.74.0",
    "webpack-cli": "^4.10.0",
    "webpack-dev-server": "^4.9.3"
  },
  "dependencies": {
    "@reduxjs/toolkit": "^1.8.3",
    "axios": "^0.27.2",
    "moment": "^2.29.4",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-redux": "^8.0.2",
    "react-router": "^6.3.0",
    "react-router-dom": "^6.3.0",
    "redux": "^4.2.0",
    "redux-saga": "^1.1.3",
    "styled-components": "^5.3.5",
    "design-system-fitbank": "^1.0.3",
    "typescript": "^4.7.4"
  }
}
`