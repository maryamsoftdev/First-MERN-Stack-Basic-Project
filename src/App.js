import React from 'react'
// import { BrowserRouter, Route } from 'react-router-dom'
// import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
const App = ()=>{
    return (
    <div>
        <BrowserRouter>
         <Routes>
           {/* <Route exact path='/login' element={<Login/>} /> */}
         <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
        {/* <Route exact path='/register' element={<Register/>} /> */}
         </Routes>
        </BrowserRouter>

    </div>
    )
}
export default App

// root.render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />} />
//       <Route path="expenses" element={<Expenses />} />
//       <Route path="invoices" element={<Invoices />} />
//     </Routes>
//   </BrowserRouter>
// );


