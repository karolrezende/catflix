import { iMovie } from "providers/MoviesProvider"
import MovieCard from "/src/components/MovieCard/MovieCard"
import { useMovieContext } from "/src/providers/MoviesProvider"
import styles from './styles.module.scss'
interface iProps {
  title: string, 
  type: string
}
export default function List({title, type}: iProps) {
  const {movie} = useMovieContext()
  return (
    <div>
      <h1>{title}</h1>
      <div className={styles.card}>
        {movie.map((item: iMovie)=> <MovieCard key={item.id} pic={item.image}/>)}
      </div>
    </div>
  )
}
