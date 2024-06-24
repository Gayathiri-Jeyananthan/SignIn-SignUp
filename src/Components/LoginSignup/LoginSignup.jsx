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
          <img
            src={user_icon}
            style={{ height: "30px", width: "30px" }}
            alt="UserIcon"
          />
          <input type="text" placeholder="Name" />
        </div>
        <div className="input">
          <img
            src={mail_icon}
            style={{ height: "30px", width: "30px" }}
            alt="MailIcon"
          />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <img
            src={password_icon}
            style={{ height: "30px", width: "30px" }}
            alt="PasswordIcon"
          />
          <input type="password" placeholder="Password" />
        </div>
        <div className="forgot-password">Lost Password? Click Here!</div>
        <div className="submit-container">
          <div className="submit">Sign Up</div>
          <div className="submit">Login</div>
        </div>
      </div>
    </div>
  );
};
