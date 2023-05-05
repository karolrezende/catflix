import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import SignIn from "./pages/signin/SignIn";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/notFound/notFound";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/cadastro" element={<SignIn/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  )
}
