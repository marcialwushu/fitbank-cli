export const mainSrc = `
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeDSProvider } from 'design-system-fitbank'

import {Router} from './_routers/router'
import { GlobalStyles } from './_styles/globalStyles'
import { theme } from './_styles/theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeDSProvider theme={theme}>
      <Router />
      <GlobalStyles />
    </ThemeDSProvider>
  </React.StrictMode>
)
`