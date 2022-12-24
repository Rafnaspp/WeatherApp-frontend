import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../login/Login.scss";
import axios from "axios";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [result, setResult] = useState([""]);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data.email);
  };

  const toSingUp = () => {
    navigate("/signup");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:4000/login",data)
  };

  return (
    <div className="login-container">
        <div className="welcome-section">
            <h1>WElCOME TO TODO </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra ligula eget neque finibus elementum. Sed ut nisi in justo convallis euismod quis at nulla. Nunc eget neque in leo finibus tristique id vel metus. Sed malesuada vulputate lacus, at dictum risus semper vel. Vestibulum vulputate, mauris non consectetur iaculis, sapien magna convallis dolor, id dapibus magna ex ut ante. Pellentesque volutpat pretium nibh. Nunc dolor erat, imperdiet a orci id, mollis gravida magna. Morbi nunc lorem, commodo eget sodales eu, fringilla nec tortor. Nulla eget metus ac neque facilisis placerat quis at magna. Curabitur at rutrum justo.</p>
          <img src="https://cdn-icons-png.flaticon.com/512/1950/1950715.png" alt="" />
        </div>
        <div className="form-section">
        <form action="" autocomplete="off" onSubmit={handleSubmit}>
        <h1>SIGN IN</h1>
        <div className="input-group">
        <label htmlFor="">Email</label>
        <input
          type="email"
          onChange={handleChange}
          placeholder="your email"
          id="email"
          name="email"
        />
        </div>
        <div className="input-group">
        <label htmlFor="">Password</label>
        <input
          type="password"
          onChange={handleChange}
          placeholder="password"
          id="password"
          name="password"
        />
        </div>
        <button className="submitButton" type="submit">
          Login
        </button>
      </form>
      <p onClick={toSingUp}>Don't have account?Sign Up</p>
        </div>
      
    </div>
  );
};

export default Login;
