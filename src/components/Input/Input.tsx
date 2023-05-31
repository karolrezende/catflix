import paw from '/public/patinha.png'
import styles from  './styles.module.scss'
interface iPropsInput{
    type: string,
    placeholder: string,
    label: string
}
export default function Input({type, placeholder, label}: iPropsInput) {
  return (
    <div className={styles.input}> 
        <label>{label}</label>
        <div className={styles.input_input}>
            <img src={paw} alt="Patinha icone" />
            <input type={type} placeholder={placeholder}/>
        </div>
    </div>
  )
}

export default const Input = forwardRef<HTMLInputElement, React.HTMLProps<HTMLInputElement>>((props, ref) => {
  return <input ref={ref} {...props} />;
});
