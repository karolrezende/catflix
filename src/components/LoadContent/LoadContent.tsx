import catflix from '/public/catflix.png'
import styles from './styles.module.scss'
export default function LoadContent() {
  return (
    <div className={styles.div_load}>
        <audio autoPlay>
        <source src="src\pages\home\content\miau.mp3" type="audio/mp3" />
        </audio>

        <div className={styles.div_load_img}>
          <img src={catflix} alt="Loadscreen catflix" className={styles.div_load_img__img} />
        </div>
    </div>
  )
}
