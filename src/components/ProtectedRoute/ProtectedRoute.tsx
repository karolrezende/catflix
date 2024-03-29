import { Navigate } from 'react-router-dom'
interface iProps{
  children: any,
  token: string
}
export default function ProtectedRoute({children, token}: iProps) {
  if(!token){
    return <Navigate to='/login'/>
  }
  return children
}
