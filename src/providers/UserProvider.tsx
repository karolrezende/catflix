import { Children, ReactNode, createContext, useContext, useState } from "react"

interface iReactNode{
    children: ReactNode
}
interface iContext{
    token: string
}
const UserContext = createContext<iContext>({} as iContext)

export const UserProvider=({children}: iReactNode)=> {
    const [token, setToken] = useState("")
    return (
        <UserContext.Provider value={{token}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext)