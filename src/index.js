import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './routes/HomePage';
import SignIn from './routes/SignIn';
import SignUp from './routes/SignUp';
import Menu from './routes/Menu';
import EditProfileUser from './routes/ProfileUser';
import OrderDetailItems from './components/OrderDetailItems';
import OrderDetail from './routes/OrderDetail';
import EditProfile from './routes/EditProfile';
import CartPage from './routes/CartPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <HomePage></HomePage>
    ),
  },
  {
    path: "/signin",
    element: (
      <SignIn></SignIn>
    )
  },
  {
    path: "/signup",
    element: (
      <SignUp></SignUp>
    )
  },
  {
    path: "/menu",
    element: (
      <Menu></Menu>
    )
  },
  {
    path: "/profile",
    element: (
      <EditProfileUser></EditProfileUser>
    )
  },
  {
    path: "/order-detail/:id",
    element: (
      <OrderDetail></OrderDetail>
    )
  },
  {
    path: "/edit-profile",
    element: (
      <EditProfile></EditProfile>
    )
  },
  {
    path: "/cart",
    element: (
      <CartPage />
    )
  },


]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
