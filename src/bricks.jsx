import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import Bricks from './components/Bricks'
import Footer from './components/Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <main>
      <Bricks />
    </main>
    <Footer />
  </StrictMode>,
)
