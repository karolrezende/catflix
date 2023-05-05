import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import SignIn from "./pages/signin/SignIn";
import { Routes, Route } from "react-router-dom";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/cadastro" element={<SignIn/>}/>
    </Routes>
  )
}
