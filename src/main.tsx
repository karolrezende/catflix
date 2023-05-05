import React from 'react'
import ReactDOM from 'react-dom/client'
import Routers from './Routers.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './providers/UserProvider.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <UserProvider>
    <BrowserRouter>
      <React.StrictMode>
        <Routers />
      </React.StrictMode>
    </BrowserRouter>
  </UserProvider>
)
