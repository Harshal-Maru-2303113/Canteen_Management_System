import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from "./components/LoginPage"
import SignUpPage from './components/SignUpPage'
import HomePage from './components/HomePage';
import HeroPage from './components/HeroPage';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
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
    path: "/",
    element: [<NavBar />,<HeroPage />,<Footer />]
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

