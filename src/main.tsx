import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { App } from './App.tsx'

import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import '@mantine/charts/styles.css'
import '@mantine/notifications/styles.css'
import '@mantine/code-highlight/styles.css'
import '@mantine/tiptap/styles.css'
import '@mantine/dropzone/styles.css'
import '@mantine/carousel/styles.css'
import '@mantine/spotlight/styles.css'
import '@mantine/nprogress/styles.css'

import { createTheme, MantineProvider } from '@mantine/core'

const theme = createTheme({
  /** Put your mantine theme override here */
});

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <MantineProvider theme={theme}>
            <App />
        </MantineProvider>
    </StrictMode>,
)
