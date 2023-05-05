import { useEffect, useState } from 'react'
import img from '/public/catflix.png'
import styles from './styles.module.scss'
import Button from '/src/components/Button/Button'
import LoadContent from '../../components/LoadContent/LoadContent'
import { Link } from 'react-router-dom'
import Login from '../login/Login'
import SignIn from '../signin/SignIn'

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
      }, 3000)
    }
    
  },[])

  return(
    <div>
      {showVisited && <LoadContent/>}
      {!showVisited && (
        <div className={styles.main}>
          <div className={styles.main_}>
            <div className={styles.main__section}>
               <header>
                  <img src={img} alt="Logo catflix"  />
                  <h4>Maior plataforma de CATstreaming do Brasil</h4>
               </header>
               <div className={styles.main__section_body}>
                  <div className={styles.main__section_body_btn1}>
                    <Link to={'/login'}>
                      <Button option={1}>Entre</Button>
                    </Link>
                  </div>
                  <p>ou</p>
                  <div className={styles.main__section_body_btn2}>
                    <Link to={'/cadastro'}>
                      <Button option={2}>Catdastre-se</Button>
                    </Link>
                  </div>
               </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
