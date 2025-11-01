import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Components/Root.jsx';
import AllProducts from './Components/AllProducts.jsx';
import Home from './Components/Home.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import Register from './Components/Register.jsx';
import Login from './Components/Login.jsx';
import MyProducts from './Components/MyProducts.jsx';
import MyBids from './Components/MyBids.jsx';
import ProductDetails from './Components/ProductDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/allproducts',
        Component: AllProducts
      },
      {
        path: '/register',
        Component: Register
      },
      {
        path: '/login',
        Component: Login
      },
      {
        path: '/myproducts',
        element: <MyProducts></MyProducts>
      },
      {
        path: '/mybids',
        element: <MyBids></MyBids>
      },
      {
        path: '/productdetails/:id',
        loader: ({ params }) => fetch(`http://localhost:3000/products/${params.id}`),
        Component: ProductDetails
      }
    ]

  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
