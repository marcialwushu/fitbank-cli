export const huskyrc = `
{
  "hooks": {
    "pre-commit": "lint-staged",
    "pre-push": "yarn test:ci"
  }
}
`