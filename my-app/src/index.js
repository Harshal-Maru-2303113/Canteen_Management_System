import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from "./components/LoginPage"
import SignUpPage from './components/SignUpPage'
import HomePage from './components/HomePage';
import HeroPage from './components/HeroPage';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import ProfilePage from './components/ProfilePage';
import PastOrder from './components/PastOrder';

import {
createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: [<NavBar aboutUs="aboutUs" login="login" signup='signup' />,<HeroPage />,<Footer />]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <SignUpPage />
  },
  {
    path: "/home",
    element: [<NavBar />,<HomePage />,<Footer />]
  },
  {
    path: "/cart",
    element: [<NavBar />,<Cart />,<Footer />]
  },
  {
    path: "/profile",
    element: [<NavBar />,<ProfilePage />,<Footer />]
  },
  {
    path: "/pastorder",
    element: [<NavBar />,<PastOrder />,<Footer />]
  }
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
