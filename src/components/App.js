
import React from "react";
import './../styles/App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserList from "./UserList";
import UserDetails from "./UserDetails";

const App = () => {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<UserList/>}></Route>
            <Route path='/users/:id' element={<UserDetails/>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
