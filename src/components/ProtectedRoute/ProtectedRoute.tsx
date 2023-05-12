import React, { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
interface iProps{
  children: ReactNode,
  token: string
}
export default function ProtectedRoute({children, token}: iProps) {
  if(!token){
    return <Navigate to='/login'/>
  }
  return children
}
