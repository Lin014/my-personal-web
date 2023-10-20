import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createHashRouter } from 'react-router-dom'

import Home from './Home.jsx'
import Collections from './pages/Collections.jsx'
import RootLayout from './layout/root.jsx'
import ErrorPage from './pages/Error.jsx'
import Introduction from './pages/Introduction.jsx'

import "./assets/scss/all.scss";

const router = createHashRouter([
  { 
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "introduction", element: <Introduction />},
      { path: "collections", element: <Collections />}
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
