import catflix from '/public/catflix.png'
import catlogo from '/public/catlogo.svg'
import paw from '/public/paw.png'
import catformers from './content/catformers.png'
import play from './content/play.png'
import info from './content/info.png'
import add from './content/+.png'
import styles from './styles.module.scss'
import { Link } from 'react-router-dom'
export default function HomePage() {
  return (
    <div className={styles.main}>
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
              <Link to='/pesquisar'>
                <div className={styles.div_header_div2__search}>
                  <img src={paw} alt="Pesquisar button" />
                  <p>Pawsquisar</p>

                </div>
              </Link>
          </header>
      </div>
      <div className={styles.div_button}>
        <div className={styles.div_button__img}>
          <img src={catformers} alt="Imagem de referencia ao filme" />
        </div>
        <div className={styles.div_button__container}>
          <div className={styles.div_button__container_reverse}>
            <div className={styles.div_button__container_reverse_add}>
              <img src={add} alt="Add button" />
              <p>Add</p>
            </div>
            <div className={styles.div_button__container_reverse_button}>
                <img src={play} alt="Play button" />
                <p>Play</p>
            </div>
          </div>
          <div className={styles.div_button__container_reverse_info}>
            <img src={info} alt="Info button" />
            <p>Infos</p>
          </div>
        </div>
      </div>
    </div>
  )
}
