import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import Route from './Routes/Route.jsx'
import AuthProvider from './AuthProvider.jsx/Authprovider.jsx'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <RouterProvider router={Route}></RouterProvider>
  </AuthProvider>
  <Toaster></Toaster>
  </React.StrictMode>,
)
