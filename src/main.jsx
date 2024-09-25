import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { DateProvider } from './context/DateContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DateProvider>
      <App />
    </DateProvider>,
  </StrictMode>,
)
