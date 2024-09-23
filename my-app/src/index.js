import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from "./components/LoginPage"
import SignUpPage from './components/SignUpPage'
import HomePage from './components/HomePage';
import HeroPage from './components/HeroPage';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProfilePage from './components/ProfilePage';
import PastOrder from './components/PastOrder';

const router = createBrowserRouter([
  {
    path: "/",
    element: [<NavBar />,<HeroPage />,<Footer />]
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
    path: "home/cart",
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

