import React from 'react'
import Login from './Component/Login'
import Registration from './Component/Registration'
import { Route,Routes } from 'react-router-dom'
import ForgotPassword from './Component/ForgotPassword'
import AddProduct from './Component/AddProduct'
import UpdateProduct from './Component/UpdateProduct'
import PrivateComponent from './Component/PrivateComponent';
import Dashboad from './Component/Dashboad'
import Navbar from './Component/Navbar'
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
   
  <Route path='/registration'element={<Registration/>}/>
  < Route path='/login' element={< Login/>}/>
  < Route path='/forgotPassword' element={< ForgotPassword/>}/>
  
  {/* <Route element={<PrivateComponent/>}> */}
  < Route path='/addProduct'element={<AddProduct/>}/>
   <Route >
  < Route path='/updateProduct' element={<UpdateProduct/>}/>
  < Route path='/dashboad' element={<Dashboad/>}/>
  </Route>
  {/* </Route> */}
</Routes>
     
</>
  )
}

export default App