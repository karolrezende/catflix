import catflix from '/public/catflix.png'
import catlogo from '/public/catlogo.svg'
import styles from './styles.module.scss'

interface iProps{
    type: string
}

export default function Header({type}: iProps){
    return(
        <div>
            {type === "icon" && <HeaderIcon/>}
            {type === "noIcon" && <HeaderNoIcon/>}
        </div>
    )
}
const HeaderIcon = () => {
  return (
    <div className={styles.div_icon}>
        <img src={catflix} alt="Catflix logo" className={styles.div_icon__name}/>
        <img src={catlogo} alt="Catflix logo" className={styles.div_icon__logo}/>
    </div>
  )
}

const HeaderNoIcon = () => {
    return (
      <div className={styles.div}>
        <img src={catflix} alt="Catflix logo" className={styles.div_name}/>
      </div>
    )
}
