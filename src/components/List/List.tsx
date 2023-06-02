import MovieCard from "/src/components/MovieCard/MovieCard"
import { useMovieContext } from "/src/providers/MoviesProvider"

interface iProps {
  title: string, 
  type: string
}
export default function List({title, type}: iProps) {
  const {movie} = useMovieContext()
  console.log(movie)
  return (
    <div>
      <h1>{title}</h1>
      <div>
        {movie.map(item=> <MovieCard key={item.id}/>)}
      </div>
    </div>
  )
}
