import { Children, ReactNode, createContext, useContext, useState } from "react"

interface iReactNode{
    children: ReactNode
}
interface iContext{
    token: string
    tokenSetter: (token: string) => void
}
const UserContext = createContext<iContext>({} as iContext)

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
    return (
        <UserContext.Provider value={{token,tokenSetter}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext)