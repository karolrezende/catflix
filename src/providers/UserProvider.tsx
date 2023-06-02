/* eslint-disable no-inner-declarations */
import { api } from "/src/app/apiConection"
import { AxiosResponse } from "axios"
import { Children, ReactNode, createContext, useContext, useEffect, useState } from "react"

interface iReactNode{
    children: ReactNode
}
interface iContext{
    token: string
    user: iUser
    tokenSetter: (token: string) => void
}
const UserContext = createContext<iContext>({} as iContext)
interface iUser {
    id: number,
    name: string, 
    email: string
}
export const UserProvider=({children}: iReactNode)=> {
    const [token, setToken] = useState("")

    if (localStorage.getItem('token')) {
        const newToken: string = JSON.parse(localStorage.getItem('token')!);
        if (newToken !== token) {
          setToken(newToken);
        }
    }

    const tokenSetter = (token: string) =>{
        setToken(token)
    }
    
    const [user, setUser] = useState({} as iUser)
    useEffect(()=>{ 
        if (token) {
            async function getUser(){
                const userRequest = await api.get('/profile', {
                    headers:{
                        "Authorization": `Bearer ${token}`
                    }
                }).then((res: AxiosResponse)=>{
                    setUser(res.data)
                })
            }    
            getUser()
        }
    }, [])
        

    return (
        <UserContext.Provider value={{token,tokenSetter, user}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext)