import { forwardRef, HTMLProps } from 'react';
import paw from '/public/patinha.png';
import styles from './styles.module.scss';

interface InputProps extends HTMLProps<HTMLInputElement> {
  label: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ type, placeholder, label, ...props }, ref) => {
  return (
    <div className={styles.input}>
      <label>{label}</label>
      <div className={styles.input_input}>
        <img src={paw} alt="Patinha icone" />
        <input type={type} ref={ref} placeholder={placeholder} {...props} />
      </div>
    </div>
  );
});

export default Input;


