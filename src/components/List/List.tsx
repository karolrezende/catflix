import MovieCard from '../../components/MovieCard/MovieCard'
import { iMovie, useMovieContext } from '../../providers/MoviesProvider'
import styles from './styles.module.scss'
export default function List(props: any) {
  console.log(props.type)
  const {movie} = useMovieContext()
  return (
    <>
      <h1>{props.title}</h1>
      <section className={styles.section}>
        {movie.map((m: iMovie)=> {
          if(props.type === m.tag){
            console.log(m.id);
            return <MovieCard key={m.id} movie={m}/>
          }
        })}
      </section>
    </>
  )
}
