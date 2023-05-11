import Header from '/src/components/Header/Header'
import styles from './styles.module.scss'
import Input from '/src/components/Input/Input'
import Button from '/src/components/Button/Button'
import Footer from '/src/components/Footer/Footer'
import catInput from '/public/cathappy.png'
import catSleep from '/public/catsleep.png'
import catSit from '/public/catsit.png'
import catBit from '/public/bigCat.png'
import { Link } from 'react-router-dom'
export default function SignIn() {
  return (
    <div className={styles.div}>
      <div className={styles.div_header}>
        <Header type='icon'/>
      </div>
      <p className={styles.div_title}>CATastre-se</p>
      <div className={styles.div_}>
        <div className={styles.div_div}>
          <div className={styles.div_div_border}>
            <form className={styles.div_div_border__form}>
              <img src={catInput} alt="Gatinho input" className={styles.div_div_border__form_icon}/>
              <Input type="name" placeholder="Digite seu nome" label='Nome'/>
              <Input type="email" placeholder="Digite seu email" label='Email'/>
              <Input type="password" placeholder="Digite sua senha" label='Senha'/>
              <Input type="password" placeholder="Confirme sua senha" label='Confirmar senha'/>
              <div className={styles.div_div_border__form_button}>
                <div className={styles.div_div_border__form_button_um}> 
                    <Button option={1}>Catastre-se</Button>
                </div>
                <p className={styles.div_div_border__form_button_p1}>Já possui conta? <Link to='/login' className={styles.div_div_border__form_button_p3}>Faça o login</Link></p>
                <p className={styles.div_div_border__form_button_p2}><Link to='/cadastro' className={styles.div_div_border__form_button_p2}>Login</Link></p>
              </div>
              <div className={styles.div_div_border__form_img}>
                <img src={catSit} alt="imagem gatinho" className={styles.div_div_border__form_img_catsit} />
                <img src={catSleep} alt="imagem gatinho" className={styles.div_div_border__form_img_catsleep} />
              </div>
            </form>
          </div>
        </div>
        <img src={catBit} alt="gato de decoração" className={styles.catbig} />  
      </div>
      <p className={styles.div_cat}>Ao se catastrar você concorda com <strong><Link className={styles.div_cat_2} to='/termo'>nossos termos de catsponsabilidade</Link></strong></p>
      <Footer/> 
    </div>
  )
}
