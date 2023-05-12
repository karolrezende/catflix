import Header from '/src/components/Header/Header'
import catbox from './content/catbox.png'
import styles from './styles.module.scss'
import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
    <div className={styles.div}>
        <div className={styles.div_header}>
          <Header type='noIcon'/>
        </div>
        <div className={styles.div_body}>
          <div className={styles.div_body__text}>
            <h1>404</h1>
            <p>Ops! Parece que a página que você
              está procurando sumiu dentro 
              da caixa!</p>
          </div>
          <div className={styles.div_body__img}>
            <img src={catbox} alt="Gatinho dentro da caixa" />
          </div>
          <Link to='/login' className={styles.div_body__link}>Voltar</Link>
        </div>
    </div>
  )
}
