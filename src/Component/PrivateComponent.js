import React from "react";
import { Navigate,Outlet} from "react-router-dom"
 const PrivateComponent=()=>{
     const auth= localStorage.getItem("Token")
     return  auth? <Outlet/>:<Navigate to="/registration"/>
    }
export default PrivateComponent;