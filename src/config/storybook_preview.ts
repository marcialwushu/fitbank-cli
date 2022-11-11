export const storyBookPreview = `
import { ThemeDSProvider } from 'design-system-fitbank';
import { theme, GlobalStyles } from '../src/_styles'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
export const decorators = [
  (Story) => (
    <ThemeDSProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeDSProvider>
  ),
]
`