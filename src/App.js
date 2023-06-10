import jwtDecode from "jwt-decode";
import "./App.css";
import { useNotification } from "./Context/Notification.context";
import { Suspense, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import SockJS from "sockjs-client";
import { over } from "stompjs";
import { NotificationToast } from "./components/NotificationToast";
import { Route, Routes } from "react-router-dom";
import HomePage from "./routes/HomePage";
import NotFound from "./routes/NotFound";
import Menu from "./routes/Menu";
import ProfileUser from "./routes/ProfileUser";
import OrderDetail from "./routes/OrderDetail";
import EditProfile from "./routes/EditProfile";
import CartPage from "./routes/CartPage";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";

function App() {
  const token = localStorage.getItem("token");
  let role = null;
  let userId = null;
  if (token) userId = jwtDecode(token).user.id;
  if (token) role = jwtDecode(token).user.role[0].name;

  const { setNumberOfUnreadNotification, setNotifications } = useNotification();
  let { stompClient } = useNotification();

  const onError = (err) => {
    console.log(err);
  };

  const onConnected = () => {
    if (!stompClient) return;
    if (role && role === "ROLE_CUSTOMER") {
      stompClient.subscribe(
        `/user/${userId}/notification`,
        onUserNotificationReceived
      );
    } else if (role && role === "ROLE_STAFF") {
      stompClient.subscribe(
        "/system/notification",
        onSystemNotificationReceived
      );
    }
  };

  const onUserNotificationReceived = (payload) => {
    const data = JSON.parse(payload.body);
    setNumberOfUnreadNotification((prev) => prev + 1);
    setNotifications((prev) => [data, ...prev]);
    toast(
      <NotificationToast text={data.message} slug={`/order/${data.slug}`} />,
      {
        position: "bottom-left",
        autoClose: false,
        className: "notification-toast",
      }
    );
  };

  const onSystemNotificationReceived = (payload) => {
    const data = JSON.parse(payload.body);
    setNumberOfUnreadNotification((prev) => prev + 1);
    setNotifications((prev) => [data, ...prev]);
    toast(
      <NotificationToast text={data.message} slug={`/order/${data.slug}`} />,
      {
        position: "bottom-left",
        autoClose: false,
        className: "notification-toast",
      }
    );
  };

  useEffect(() => {
    var socket = new SockJS("http://localhost:8080/ws");
    stompClient = over(socket);
    if (stompClient && token) {
      stompClient.connect({}, onConnected, onError);
    }
  }, []);

  return (
    <>
      <Suspense fallback={<p></p>}>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/profile" element={<ProfileUser />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="/order/:id" element={<OrderDetail />}></Route>
          <Route path="/edit-profile" element={<EditProfile />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/not-found" element={<NotFound></NotFound>}></Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
