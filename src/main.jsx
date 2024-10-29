import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/NavBar.css'
import './css/Body.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
