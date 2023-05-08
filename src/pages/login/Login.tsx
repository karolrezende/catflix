import Header from '/src/components/Header/Header'
import styles from './styles.module.scss'
import Input from '/src/components/Input/Input'
import Button from '/src/components/Button/Button'
import Footer from '/src/components/Footer/Footer'
export default function Login() {
  return (
    <div className={styles.div}>
      <Header type='icon'/>
      <p className={styles.div_title}>Entre para acessar</p>
      <div className={styles.div_border}>
        <form>
          <Input type="name" placeholder="Digite seu email" label='Email'/>
          <Input type="password" placeholder="Digite sua senha" label='Senha'/>
          <div> 
            <Button option={1}>Entrar</Button>
          </div>
          <span>Ainda não possui conta?</span>
          <div>
            <Button option={2}>Catastre=se</Button>
          </div>
        </form>
      </div>
      <Footer/>
    </div>
  )
}
