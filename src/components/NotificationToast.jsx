import React from "react";
import { Link } from "react-router-dom";
import "../styles/notificationToast.css";

export const NotificationToast = ({ text, slug }) => {
  return (
    <div className="notification">
      <Link to={slug}>
        <div class="notification-header">
          <h3 class="notification-title">Thông báo mới</h3>
          <i
            class="fa fa-times notification-close"
            onClick={(e) => e.preventDefault()}
          ></i>
        </div>
        <div class="notification-container">
          <div class="notification-media">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              alt=""
              class="notification-user-avatar"
            />
          </div>
          <div class="notification-content">
            <p class="notification-text">{text}</p>
            <span class="notification-timer">vài giây trước</span>
          </div>
          <span class="notification-status"></span>
        </div>
      </Link>
    </div>
  );
};
