import styles from './styles.module.scss'

export default function MovieCard(movie: any) {
  console.log(movie)
  return (
    <div className={styles.div}>
      <img src={movie.movie.image} alt="Imagem do filme" className={styles.div_img}/>
    </div>
  )
}
