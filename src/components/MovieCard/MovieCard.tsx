import React from 'react'
import styles from './styles.module.scss'

export default function MovieCard(pic: any) {
  console.log(pic.pic)
  return (
    <div className={styles.div}>
      <img src={pic.pic} alt="Imagem do filme" className={styles.div_img}/>
    </div>
  )
}
