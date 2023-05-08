import Header from '/src/components/Header/Header'
import styles from './styles.module.scss'
import Input from '/src/components/Input/Input'
import Button from '/src/components/Button/Button'
import Footer from '/src/components/Footer/Footer'
import catInput from '/public/cathappy.png'
import catSleep from '/public/catsleep.png'
import catSit from '/public/catsit.png'
import catBit from '/public/bigCat.png'
export default function Login() {
  return (
    <div className={styles.div}>
      <Header type='icon'/>
      <div className={styles.div_}>
        <div className={styles.div_div}>
          <p className={styles.div_div_title}>Entre para acessar</p>
          <div className={styles.div_div_border}>
            <form className={styles.div_div_border__form}>
              <img src={catInput} alt="Gatinho input" className={styles.div_div_border__form_icon}/>
              <Input type="name" placeholder="Digite seu email" label='Email'/>
              <Input type="password" placeholder="Digite sua senha" label='Senha'/>
              <div className={styles.div_div_border__form_button}>
                <div className={styles.div_div_border__form_button1}> 
                  <Button option={1}>Entrar</Button>
                </div>
                <span>Ainda não possui conta?</span>
                <div className={styles.div_div_border__form_button2}>
                  <Button option={2}>Catastre=se</Button>
                </div>
              </div>
              <div className={styles.div_div_border__form_img}>
                <img src={catSit} alt="imagem gatinho" className={styles.div_div_border__form_catsit} />
                <img src={catSleep} alt="imagem gatinho" className={styles.div_div_border__form_catsleep} />
              </div>
            </form>
          </div>
        </div>
          <img src={catBit} alt="gato de decoração" className={styles.catbig} />  
      </div>
      <Footer/> 
    </div>
  )
}
