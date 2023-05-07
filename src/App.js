import jwtDecode from "jwt-decode";
import "./App.css";
import { useNotification } from "./Context/Notification.context";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SockJS from "sockjs-client";
import { over } from "stompjs";

function App({ children }) {
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
    toast(data.message);
  };

  const onSystemNotificationReceived = (payload) => {
    const data = JSON.parse(payload.body);
    setNumberOfUnreadNotification((prev) => prev + 1);
    setNotifications((prev) => [data, ...prev]);
    toast(data.message);
  };

  useEffect(() => {
    var socket = new SockJS("http://localhost:8080/ws");
    stompClient = over(socket);
    if (stompClient && token) {
      stompClient.connect({}, onConnected, onError);
    }
  }, []);

  if (!token) return { children };
  return (
    <>
      {children}
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
