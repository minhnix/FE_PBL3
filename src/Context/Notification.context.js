import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { axios } from "../api/config.js";
import jwtDecode from "jwt-decode";
import { over } from "stompjs";
import SockJS from "sockjs-client";

const NotificationContext = createContext();
var stompClient = null;

function NotificationProvider(props) {
  const token = localStorage.getItem("token");
  const [numberOfUnreadNotification, setNumberOfUnreadNotification] =
    useState(0);
  const [notifications, setNotifications] = useState([]);
  const [notificationPage, setNotificationPage] = useState(1);
  const [last, setLast] = useState(false);

  let user = null;
  let role = null;
  if (token) {
    user = jwtDecode(token).user;
    role = user.role[0].name;
  }

  const getNotifications = async (page = notificationPage, size = 10) => {
    const res = await axios.get(
      `users/notification?page=${page}&size=${size}`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    if (res.status !== 200) {
      return;
    }
    setNotifications((prev) => [...prev, ...res.data.content]);
    setLast(res.data.last);
  };

  const clearNotifications = () => {
    setNotifications([]);
    setNotificationPage(1);
  };
  const changeToRead = (id) => {
    fetch(`http://localhost:8080/api/v1/notification/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.id) setNumberOfUnreadNotification((prev) => prev - 1);
      });
  };

  useEffect(() => {
    if (!token) return;
    axios
      .get("users/unread-notification", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        setNumberOfUnreadNotification(response.data);
      })
      .catch((error) => console.log(error));
    // getNotifications(0, 10);
    connect();
  }, []);

  const connect = () => {
    var socket = new SockJS("http://localhost:8080/ws");
    stompClient = over(socket);
  };

  const onError = (err) => {
    console.log(err);
  };

  const onConnected = (callback) => {
    if (!stompClient) return;
    if (role === "ROLE_CUSTOMER") {
      stompClient.subscribe(`/user/${user.id}/notification`, callback);
    } else {
      stompClient.subscribe("/system/notification", callback);
    }
  };

  const fetchMoreNotification = () => {
    setNotificationPage((prev) => prev + 1);
    getNotifications();
  };

  const value = {
    stompClient,
    onError,
    onConnected,
    connect,
    numberOfUnreadNotification,
    notifications,
    setNumberOfUnreadNotification,
    setNotifications,
    getNotifications,
    changeToRead,
    clearNotifications,
    notificationPage,
    setNotificationPage,
    last,
    fetchMoreNotification,
  };

  return (
    <NotificationContext.Provider
      value={value}
      {...props}
    ></NotificationContext.Provider>
  );
}

function useNotification() {
  const context = useContext(NotificationContext);
  if (typeof context === "undefined")
    throw new Error(
      "useNotification must be used within a NotificationProvider"
    );
  return context;
}

export { NotificationProvider, useNotification };
