import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./routes/HomePage";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import Menu from "./routes/Menu";
import EditProfileUser from "./routes/ProfileUser";
import OrderDetail from "./routes/OrderDetail";
import EditProfile from "./routes/EditProfile";
import CartPage from "./routes/CartPage";
import AdminPage from "./routes/AdminPage";
import NotFound from "./routes/NotFound";
import MenuManagePage from "./routes/MenuManagePage";
import StaffManagePage from "./routes/StaffManagePage";
import BillManagePage from "./routes/BillManagePage";
import ImportManagePage from "./routes/ImportManagePage";
import IngredientManagePage from "./routes/IngredientManagePage";
import ImportAddManagePage from "./routes/ImportAddManagePage";
import StaffPage from "./routes/StaffPage";
import StaffOrderDetail from "./routes/StaffOrderDetail";
import jwtDecode from "jwt-decode";

const token = localStorage.getItem("token");
let role = "";
if (token) {
  const { user } = jwtDecode(token);
  role = user.role[0].name;
  console.log(user);
}
const router = createBrowserRouter([
  {
    path: "/",
    element:
      role === "ROLE_ADMIN" ? (
        <AdminPage></AdminPage>
      ) : role === "ROLE_STAFF" ? (
        <StaffPage />
      ) : (
        <HomePage></HomePage>
      ),
  },
  {
    path: "/signin",
    element: <SignIn></SignIn>,
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "/menu",
    element: <Menu></Menu>,
  },
  {
    path: "/profile",
    element: <EditProfileUser></EditProfileUser>,
  },
  {
    path: "/order-detail/:id",
    element: <OrderDetail></OrderDetail>,
  },
  {
    path: "/orders/:id",
    element: <StaffOrderDetail></StaffOrderDetail>,
  },
  {
    path: "/edit-profile",
    element: <EditProfile></EditProfile>,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "menu-management",
    element:
      role === "ROLE_ADMIN" ? <MenuManagePage /> : <Navigate to="/404" />,
  },
  {
    path: "staff-management",
    element:
      role === "ROLE_ADMIN" ? <StaffManagePage /> : <Navigate to="/404" />,
  },
  {
    path: "bill-management",
    element:
      role === "ROLE_ADMIN" ? <BillManagePage /> : <Navigate to="/404" />,
  },
  {
    path: "ingredient-management",
    element:
      role === "ROLE_ADMIN" ? <IngredientManagePage /> : <Navigate to="/404" />,
  },
  {
    path: "import-management",
    element:
      role === "ROLE_ADMIN" ? <ImportManagePage /> : <Navigate to="/404" />,
  },
  {
    path: "import-management/add",
    element:
      role === "ROLE_ADMIN" ? <ImportAddManagePage /> : <Navigate to="/404" />,
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
