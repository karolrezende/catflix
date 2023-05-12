import Header from '/src/components/Header/Header'
import styles from './styles.module.scss'
import catProfile from '/public/ccat.png'
import { useNavigate } from 'react-router-dom'
export default function Profile() {
  const username = 'Karol'
  const navigateTo = useNavigate()
  const renderHome = () =>{
    navigateTo('/home')
  }
  return (
    <div className={styles.div}>
      <div className={styles.div_header}>
        <Header type='noIcon'/>
      </div>
      <div className={styles.div_body}>
        <div className={styles.div_body_div}>
          <h1>Quem está assistindo?</h1>
          <div className={styles.div_body_div__icon} onClick={()=> renderHome()}>
            <div className={styles.div_body_div__icon_icon}>
              <img src={catProfile} alt="Cat div" />
            </div>
            <p>{username}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
