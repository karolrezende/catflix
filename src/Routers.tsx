import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
  )
}
