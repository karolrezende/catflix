import { useEffect, useState } from 'react'
import catflix from '/public/catflix.png'
import styles from './styles.module.scss'
function VisiteScreen(){
  return(
    <div className={styles.div_load}>
        <img src={catflix} alt="Loadscreen catflix" className={styles.div_load__img} />
    </div>
  )
}
export default function Home() {
  const [showVisited, setShowVisited] = useState(true)

  useEffect(()=>{
    const hasVisited = localStorage.getItem('hasVisited')
    if(hasVisited){
      setShowVisited(false)
    }else{
      setTimeout(()=>{
        setShowVisited(false)
        localStorage.setItem('hasVisited', JSON.stringify(true))
      }, 5000)
    }
    
  },[])

  return(
    <div>
      {showVisited && <VisiteScreen/>}
      {!showVisited && (
        <div>hello world</div>
      )}
    </div>
  )
}
