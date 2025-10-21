// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profil from './components/pages/Profil.jsx';
import Produk from './components/pages/Produk.jsx';
import Berita from './components/pages/Berita.jsx';
import RootLayout from './utils/RootLayout.jsx'; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, 
    children: [
      { index: true, element: <App /> },       
      { path: "profil", element: <Profil /> }, 
      { path: "produk", element: <Produk /> }, 
      { path: "berita", element: <Berita /> }, 
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

export default router;
