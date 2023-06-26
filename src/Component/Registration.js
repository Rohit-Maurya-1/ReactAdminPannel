import React, { useEffect } from "react";
import "./Registration.css";
import { useNavigate } from "react-router-dom";
import { REGISTRATION } from "../Api";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "../../node_modules/react-toastify/dist/ReactToastify.css";
const Registration = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("Token");
    if (auth) {
      navigate("/dashboad");
    }
  });
  // const[data,setData]=useState([])
  const [values, setValues] = useState({
    Name: "",
    Email: "",
    Password: "",
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await REGISTRATION(values);
       if (res) {
        localStorage.setItem("Token", JSON.stringify(res));
         toast.success("register succussfull");

        setTimeout(() => {
          navigate("/login");
        }, 5000);
      }
    } catch (error) {
      console.log("does't register");
      toast.error("register is required!");
    }
  };
  return (
    <>
      <div
        className="main"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="top">
          <h1>Registration</h1>
          <div className="form">
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              onChange={handleInput}
              placeholder="name"
              name="Name"
            />
            <br />
            <br />
            <label htmlFor="Email">Email</label>
            <input
              type="text"
              onChange={handleInput}
              placeholder="email"
              name="Email"
            />
            <br />
            <br />
            <label htmlFor="Password">Password</label>
            <input
              type="text"
              onChange={handleInput}
              placeholder="password"
              name="Password"
            />
            <br />
            <br />
            <button onClick={handleSubmit} className="btn">
              Submit
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Registration;
