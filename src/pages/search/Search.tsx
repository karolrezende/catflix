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
        <header>
            <div>
                <img src={paw} alt="Catpaw" />
                <p>Pawsquisar</p>
            </div>
            <div>
                <div>
                    <input type="text" placeholder="Procure filmes, séries..." />
                    <img src={search} alt="Imagem de gato" />
                </div>
                <img src={down} alt="Imagem de gato" />
            </div>
            <div>
                <Link to='/home'>Voltar</Link>
            </div>
        </header>
        <div>
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
