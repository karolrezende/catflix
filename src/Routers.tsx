import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import SignIn from "./pages/signin/SignIn";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/notFound/NotFound";
import Term from "./pages/term/Term";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Profile from "./pages/profile/Profile";
import { useUserContext } from "./providers/UserProvider";
import HomePage from "./pages/homePage/HomePage";
import Search from "./pages/search/Search";
import { MovieProvider } from "./providers/MoviesProvider";

export default function Routers() {
  const {token} = useUserContext()
  return (
    <MovieProvider>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/cadastro" element={<SignIn/>}/>
      <Route path="/termo" element={<Term/>}/>
      <Route path="/profile"  element={
        <ProtectedRoute token={token}>
          <Profile/>
       </ProtectedRoute>
        }/>
        <Route path="/home"  element={
          <ProtectedRoute token={token}>
            <HomePage/>
          </ProtectedRoute>
        }/>
        <Route path="/pesquisar"  element={
          <ProtectedRoute token={token}>
            <Search/>
          </ProtectedRoute>
        }/>
        <Route path="*" element={<NotFound/>}/>
    </Routes>
    </MovieProvider>
  )
}
