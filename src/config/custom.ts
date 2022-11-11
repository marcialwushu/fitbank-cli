export const custom = `
declare module '*.svg' {
  const content: string;
  export default content;
}
`