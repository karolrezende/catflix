import catflix from '/public/catflix.png'
import catlogo from '/public/catlogo.svg'
import paw from '/public/paw.png'
import styles from './styles.module.scss'
export default function HomePage() {
  return (
    <div className={styles.div}>
        <header className={styles.div_header}>
          <div className={styles.div_header_div1}>
            <div className={styles.div_header_div1__img}>
              <img src={catlogo} alt="Catlogo" className={styles.div_header_div1__img_img1}/>
              <img src={catflix} alt="Catlogo" className={styles.div_header_div1__img_img2}/>
            </div>
            <ul className={styles.div_header_div1__ul}>
              <li>Filmes</li>
              <li>Séries</li>
              <li>Mais</li>
            </ul>
          </div>
          <div className={styles.div_header_div2__search}>
            <img src={paw} alt="Pesquisar button" />
            <p>Pawsquisar</p>
          </div>
        </header>
    </div>
  )
}
