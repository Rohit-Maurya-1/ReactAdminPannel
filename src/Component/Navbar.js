import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Login from "./Login";

const Navbar = () => {
    const navigate = useNavigate;
    const auth= localStorage.getItem("Token")
        const logout=()=>{
        localStorage.clear("Token")
        navigate("/registration")
    }
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container">
          <Link class="navbar-brand" to="#">
            MENTAS
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse ms-5"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="dashboad">
                  Dashboad
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/addProduct">
                  AddProduct
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="/updateProduct">
                  UpdateProduct
                </Link>
              </li>
            </ul>
          </div>

          {/* <li class="nav-item" style={{ listStyle: "none" }}> */}
           {/* <Link onClick={Login}  class="nav-link" to="/login">
              Login
            </Link> */}
            {/* </li> */}
          <li class="nav-item" style={{ listStyle: "none" }}>
           {auth? <Link onClick={logout} class="nav-link" to="/registration">
              Logout
            </Link>:
                <li   style={{display:"flex"}}>
               <Link onClick={Login}  class="nav-link" to="/login">
              Login
            </Link>
             <Link class="nav-link" to="/registration">
                  SingnUp
             </Link>
                </li>}
              </li>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
