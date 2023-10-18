import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import './index.css'
import { ThemeProvider } from './app/contexts/ThemeContext.tsx'
import { Provider } from 'react-redux'
import store from './app/store/store.tsx'
import { BrowserRouter } from 'react-router-dom'

const root = document.getElementById('root') as HTMLElement

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
