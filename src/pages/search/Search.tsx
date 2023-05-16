import { Link } from "react-router-dom";
import paw from '/public/header/catpaw.png'
import search from '/public/header/catpesquisa.png'
import love from '/public/header/catlove.png'
import down from '/public/header/catdown.png'
import home from '/public/header/homecat.png'
import sitcat from '/public/header/sitcat.png'
import sleep from '/public/catsleep.png'
import styles from './styles.module.scss'
export default function Search() {
  return (
    <div className={styles.div}>
        <header className={styles.div_header}>
            <div className={styles.div_header__icon}>
                <img src={paw} alt="Catpaw" />
                <p>Pawsquisar</p>
            </div>
            <div className={styles.div_header__input}>
                <div>
                    <input type="text" placeholder="Procure filmes, séries..." />
                    <img src={search} alt="Imagem de gato" />
                </div>
                <img src={down} alt="Imagem de gato" className={styles.div_header__input_img}/>
            </div>
            <div className={styles.div_header__back}>
                <Link to='/home' className={styles.div_header__back_back}>Voltar</Link>
            </div>
        </header>
        <div className={styles.div_div}>
            <p>Digite algo...</p>
            <img src={love} alt="Imagem de gato" />
        </div>
        <div className={styles.div_img}>
            <img src={sitcat} alt="Imagem de gato" />
            <img src={sleep} alt="Imagem de gato" />
        </div>
        <footer>
            <Link to='/home'>
                <img src={home} alt="Imagem de gato" />
                <p>Home</p>
            </Link>
        </footer>
    </div>
  )
}
