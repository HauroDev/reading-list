import React from 'react'
import ReactDOM from 'react-dom/client'
import ConfigApp from './components/ConfigApp.tsx'
import App from './App.tsx'
import './index.css'

const root = document.getElementById('root') as HTMLElement

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ConfigApp>
      <App />
    </ConfigApp>
  </React.StrictMode>
)
