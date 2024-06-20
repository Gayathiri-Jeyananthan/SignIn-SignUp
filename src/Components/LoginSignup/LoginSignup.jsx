import React from "react";
import "./LoginSignup.css";
import user_icon from "../Assets/person.png";
import mail_icon from "../Assets/images.png";
import password_icon from "../Assets/password.png";

export const LoginSignup = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="text">SignUp</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="UserIcon" />
          <input type="text" />
        </div>
        <div className="input">
          <img src={mail_icon} alt="MailIcon" />
          <input type="email" />
        </div>
        <div className="input">
          <img src={password_icon} alt="PasswordIcon" />
          <input type="password" />
        </div>
      </div>
    </div>
  );
};
