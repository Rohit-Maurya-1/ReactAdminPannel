// import userEvent from '@testing-library/user-event'
import { useNavigate } from "react-router-dom";

// import { LOGIN } from "../Api";
// import { ToastContainer, toast } from "react-toastify";
import "../../node_modules/react-toastify/dist/ReactToastify.css";
import {schema}from "./Validation/FormValidation";
import { useFormik } from "formik";

const Login = () => {
  const Navigate = useNavigate();
  const InitialValues = {
    email: "",
    password: "",
  };
  const {handleChange, handleSubmit, errors, values}= useFormik({
    initialValues: InitialValues,
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(values,"bbbb")
  // try{
  //   const res = await LOGIN()
  //   if(res.data.Email&&res.data.Password){
  //     localStorage.setItem("Token", res.headers['token']);
  //     toast.success("login succussfull");
  //     Navigate("/dashboard");
  //   }
  // }
  //  catch(error){
  //   toast.error("does't login");
  //  }

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
          <h1>Login</h1>
          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="Email">Email</label>
            <input
              type="text"
              onChange={handleChange}
              placeholder="email"
              value={values.email}
              name="email"
            />
            <br />
            <br />
            <p>{errors?.email}</p>
            <label htmlFor="Password">Password</label>
            <input
              type="text"
              onChange={handleChange}
              placeholder="password"
              value={values.name}
              name="password"
            />
            <br />
            <br />
            <p>{errors?.password}</p>
             <button type="submit" className="btn">
              Login
            </button>
            <br />
            <br />
          </form>
          <button
            onClick={() => {
              Navigate("/ForgotPassword");
            }}
          >
            ForgotPassword
          </button>
        </div>
      </div>
      {/* <ToastContainer /> */}
    </>
  );
};

export default Login;
