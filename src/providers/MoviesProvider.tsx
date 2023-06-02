/* eslint-disable no-inner-declarations */
import { api } from "/src/app/apiConection"
import { AxiosResponse } from "axios"
import { ReactNode, createContext, useContext, useEffect, useState } from "react"

interface iReactNode{
    children: ReactNode
}
interface iContext{
    movie: iMovie[]
}
const MovieContext = createContext<iContext>({} as iContext)

interface iMovie {
    id: number,
    title: string, 
    description: string,
    image: string,
    video: string,
    tag: string
}

export const MovieProvider=({children}: iReactNode)=> {
    const [movie, setMovie] = useState([] as iMovie[])

    useEffect(()=>{ 
        async function getUser(){
            const movieRequest = await api.get('/movies').then((res: AxiosResponse)=>{
                setMovie(res.data)
            })
        }    
        getUser()
    }, [])
        

    return (
        <MovieContext.Provider value={{movie}}>
            {children}
        </MovieContext.Provider>
    )
}

export const useMovieContext = () => useContext(MovieContext)