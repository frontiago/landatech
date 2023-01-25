import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import {Home} from './pages/Home'
import {Company} from './pages/Company'
import {Team} from './pages/Team'
import {Contact} from './pages/Contact'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={ <App /> } >
          <Route path="/" element={ <Home /> } />
          <Route path="/company" element={ <Company /> } />
          <Route path="/team" element={ <Team /> } />
          <Route path="/contact" element={ <Contact /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
