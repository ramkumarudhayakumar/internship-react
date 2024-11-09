import React, { useState, useRef } from "react";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import "./Login.css";

export default function Login() {
  const [eye, setEye] = useState(false);
  const [eye2, setEye2] = useState(false);
  const [email, setEmail] = useState({});
  const [page, setPage] = useState(false);
  const [pass, setPass] = useState({});
  const [newpass, setNewPass] = useState({});
  const newPassRef = useRef();

  function eyeHandler() {
    setEye(!eye);
  }
  function eye2Handler() {
    setEye2(!eye2);
  }
  function signUpHandler(e) {
    setPage(!page);
    e.preventDefault();
  }

  function passHandler(e) {
    setPass(e.target.value);
  }
  function newPassHandler(e) {
    setNewPass(e.target.value);
  }
  function emailHandler(e) {
    setEmail(e.target.value);
  }
  function inputHandler() {
    if (pass.length && newpass.length != 0) {
      if (pass != newpass) {
        newPassRef.current.style.color = "red";
      } else {
        newPassRef.current.style.color = "green";
      }
    }
  }
  inputHandler();
  return (
    <section className="login-section">
      <div className="container py-5 d-grid justify-content-center align-content-center">
        <div className="login-col" initial="hidden" animate="visible">
          <h3 className="mt-3">SIGN UP</h3>
          <div className="form-group mt-3 form-group-1">
            <label className="form-label">Email</label>
            <input
              name="email"
              type="email"
              className="form-control"
              onChange={emailHandler}
            />
          </div>
          <div className="form-group mt-3 form-group-2">
            <label className="form-label">Password</label>
            <div className="input-group">
              <input
                name="password"
                type={!eye ? "password" : "type"}
                className="form-control"
                aria-describedby="pass"
                onChange={passHandler}
              />
              <span className="input-group-text" id="pass" onClick={eyeHandler}>
                {eye ? (
                  <IoIosEye className="eye" />
                ) : (
                  <IoIosEyeOff className="eye" />
                )}
              </span>
            </div>
          </div>
          <div className="form-group mt-3 form-group-2">
            <label className="form-label">Re-Type Password</label>
            <div className="input-group">
              <input
                ref={newPassRef}
                name="password"
                type={!eye2 ? "password" : "type"}
                className="form-control"
                aria-describedby="pass"
                onChange={newPassHandler}
              />
              <span
                className="input-group-text"
                id="pass"
                onClick={eye2Handler}
              >
                {eye2 ? (
                  <IoIosEye className="eye" />
                ) : (
                  <IoIosEyeOff className="eye" />
                )}
              </span>
            </div>
          </div>
          <div className="login-button mt-3">
            <button
              className="btn buttons"
              disabled={pass.length <= 0 || email.length <= 0}
            >
              SIGN UP
            </button>
          </div>
          <div className="d-flex mt-3">
            <div className="login-line mt-2"></div>
            <div className="login-or">
              <div className="mt-2">
                <p className="text-center">or</p>
              </div>
            </div>
            <div className="login-line mt-2"></div>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <button className="btn login-continue-with-google">
              Continue With Google
              <FcGoogle className="google-icon" />
            </button>
          </div>
          <div className="d-flex justify-content-center  mt-3">
            <p>Need an account?</p>
            <a
              href=""
              className="ms-1 text-decoration-none"
              onClick={(event) => signUpHandler(event)}
            >
              LOGIN
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
