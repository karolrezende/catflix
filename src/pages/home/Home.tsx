import { useEffect, useRef, useState } from 'react'
import c from '/public/logo/c.png'
import a from '/public/logo/a.png'
import t from '/public/logo/t.png'
import f from '/public/logo/f.png'
import l from '/public/logo/l.png'
import i from '/public/logo/i.png'
import x from '/public/logo/x.png'
import img from '/public/catflix.png'
import styles from './styles.module.scss'
import Button from '/src/components/Button/Button'

function VisiteScreen(){
  return(
      <div className={styles.div_load}>
      <audio autoPlay>
        <source src="src\pages\home\content\miau.mp3" type="audio/mp3" />
      </audio>

      <div className={styles.div_load_img}>
        <img src={c} alt="Loadscreen catflix" className={styles.div_load_img__img} />
        <img src={a} alt="Loadscreen catflix" className={styles.div_load_img__img} />
        <img src={t} alt="Loadscreen catflix" className={styles.div_load_img__img} />
        <img src={f} alt="Loadscreen catflix" className={styles.div_load_img__img} />
        <img src={l} alt="Loadscreen catflix" className={styles.div_load_img__img} />
        <img src={i} alt="Loadscreen catflix" className={styles.div_load_img__img} />
        <img src={x} alt="Loadscreen catflix" className={styles.div_load_img__img} />
      </div>
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
      }, 1000)
    }
    
  },[])

  return(

    <div>
      {showVisited && <VisiteScreen/>}
      {!showVisited && (
        <div className={styles.main}>
          <div className={styles.main_}>
            <div className={styles.main__section}>
               <header>
                  <img src={img} alt="Logo catflix"  />
                  <h4>Maior plataforma de CATstreaming do Brasil</h4>
               </header>
               <div>
                  <div>
                    <Button option={1}>Entre</Button>
                  </div>
                  <p>ou</p>
                  <div>
                    <Button option={2}>Catdastre-se</Button>
                  </div>
               </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
