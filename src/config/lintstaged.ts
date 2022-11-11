export const lintstaged = `
{
  "*.{ts,tsx}":[
    "eslint 'src/**' --fix",
    "yarn test:staged"
  ]
}
`