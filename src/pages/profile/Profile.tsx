import Header from '../../components/Header/Header'
import styles from './styles.module.scss'
import catProfile from '/public/ccat.png'
import { useNavigate } from 'react-router-dom'
import { useUserContext } from '../../providers/UserProvider'
export default function Profile() {
  const navigateTo = useNavigate()
  const renderHome = () =>{
    navigateTo('/home')
  }
  const {user} = useUserContext()
  console.log(user)
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
            <p>{user.username}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
