import React, { useState } from "react";
import "./LoginSignup.css";
import user_icon from "../Assets/person.png";
import mail_icon from "../Assets/images.png";
import password_icon from "../Assets/password.png";

export const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? 
          <div></div>
         : 
          <div className="input">
            <img
              src={user_icon}
              style={{ height: "30px", width: "30px" }}
              alt="UserIcon"
            />
            <input type="text" placeholder="Name" />
          </div>
        }

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
        {action === "Sign Up" ? <div></div> :<div className="forgot-password">
          Forget Password? <span> Click Here!</span>{" "}
        </div> }
        
        <div className="submit-container">
          <div
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Sign Up");
            }}
          >
            Sign Up
          </div>
          <div
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Login");
            }}
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
};
