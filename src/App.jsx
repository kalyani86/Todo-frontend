import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./pages/Login.jsx";
import { Signup } from "./pages/Signup.jsx";
import { Dashboard } from "./pages/Dashboard.jsx";
import { Todo } from "./pages/Todo.jsx";
import { Contactus } from "./pages/Contactus.jsx";
import { ViewProfile } from "./components/ViewProfile.jsx";
import {Profile} from './pages/Profile.jsx'
import { Single } from "./pages/Single.jsx";
import { UpdateStatus } from "./pages/UpdateStatus.jsx";
import { Addtodo } from "./pages/Addtodo.jsx";
import { Home } from "./pages/Home.jsx";
import { AboutUs } from "./pages/AboutUs.jsx";
import { Edit } from "./pages/Edit.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes path="/">
          <Route index element={<Home />} />
          <Route path=":username" exact element={<Dashboard/>}></Route>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path=":username/profile" element={<Profile/>}></Route>
          <Route path=":username/MilestoneTasks" element={<Todo />}></Route>
          <Route path="contactUs" element={<Contactus/>}></Route>
          <Route path="AboutUS" element={<AboutUs/>}></Route>
          <Route path=":username/todo/:id" element={<Single/>}></Route>
          <Route path=":username/todo/add" element={<Addtodo/>}></Route>
          <Route path=":username/updateStatus/:id" element={<UpdateStatus/>}></Route>
          <Route path=":username/editProfile" element={<Edit/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
