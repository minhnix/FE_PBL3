import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter,
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
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
import { CartProvider } from "./Context/Cart.context";
import ForbidentPage from "./routes/ForbiddenPage";
import ForbiddenPage from "./routes/ForbiddenPage";
import { NotificationProvider } from "./Context/Notification.context";
import { ToastContainer } from "react-toastify";

const token = localStorage.getItem("token");
let role = "";
if (token) {
  const { user } = jwtDecode(token);
  role = user.role[0].name;
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
    path: "/order/:id",
    element: <OrderDetail></OrderDetail>,
  },
  {
    path: "/orders/:id",
    element: <StaffOrderDetail></StaffOrderDetail>,
  },
  {
    path: "/edit-profile",
    element:
      role === "ROLE_CUSTOMER" ? (
        <EditProfile></EditProfile>
      ) : (
        <Navigate to="/" />
      ),
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
    path: "403",
    element: <ForbiddenPage />,
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// if (!token)
//   root.render(
//     <NotificationProvider>
//       <CartProvider>
//         <RouterProvider router={router}></RouterProvider>
//         {/* <App></App> */}
//       </CartProvider>
//     </NotificationProvider>
//   );
// else
// root.render(
//   <NotificationProvider>
//     <CartProvider>
//       <RouterProvider router={router}>
//         <App>
//           <ToastContainer
//             position="bottom-left"
//             autoClose={5000}
//             hideProgressBar={true}
//             newestOnTop={true}
//             closeOnClick
//             rtl={false}
//             pauseOnFocusLoss
//             draggable
//             pauseOnHover
//             theme="light"
//           />
//         </App>
//       </RouterProvider>
//     </CartProvider>
//   </NotificationProvider>
// );
root.render(
  <NotificationProvider>
    <CartProvider>
      <BrowserRouter>
        <App />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </BrowserRouter>
    </CartProvider>
  </NotificationProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
