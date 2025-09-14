import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profil from './components/pages/Profil.jsx';
import Produk from './components/pages/Produk.jsx';
import Berita from './components/pages/Berita.jsx';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/profil",
    element: <Profil />,
  },
  {
    path: "/produk",
    element: <Produk />,
  },
  {
    path: "/berita",
    element: <Berita />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router}/>
  </React.StrictMode>,
)

export default Router;
