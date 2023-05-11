import superCat from './content/supercat.png'
import catWalk from './content/catwalk.png'
import sorryCat from './content/sorricat.png'
import styles from './styles.module.scss'
export default function Term() {
  return (
    <div className={styles.div}>
      <img src={superCat} className={styles.div_cat1} alt="Gatinho de fundo" />
      <div className={styles.div_div}>
        <div className={styles.div_div_border}>
          <h1>TERMO DE CATSPONSABILIDADE</h1>
          <p>
          Ao aceitar nosso termo de responsabilidade você concorda em estar apto a <br></br> amarincodicionalmente e irrevogávelmente todos os animais presentes no  <br></br>planeta terra (especialmente os gatos). Irá estar apto cuida-los, acaricia-los e <br></br> ama-los em tempo integral, dedicando toda sua mera existencia a sua <br></br>plenitude. Sempre que possivel irá acolhe-los, alimenta-los e afaga-los, caso<br></br> haja necessidade também irá tratar de suas feridas e curar seus machucados.
          </p>
          <img src={sorryCat} alt="Gatinho sorrycat" />
        </div>
      </div>
      <img src={catWalk} alt="Gatinho de fundo" className={styles.div_cat2} />
    </div>
  )
}
