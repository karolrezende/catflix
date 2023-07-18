import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../../components/Header/Header'
import styles from './styles.module.scss'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import Footer from '../../components/Footer/Footer'
import catInput from '/public/cathappy.png'
import catSleep from '/public/catsleep.png'
import catSit from '/public/catsit.png'
import catBit from '/public/bigCat.png'
import { Link } from 'react-router-dom'

import * as yup from 'yup'; 
import { useForm } from "react-hook-form"; 
import { yupResolver } from '@hookform/resolvers/yup';
import { api } from '../../app/apiConection.tsx'

import { AxiosError, AxiosResponse } from 'axios'

export interface iSign {
  username: string, 
  email: string,
  password: string, 
  confirmPassword?: string
}

export default function SignIn() {
  const schema = yup.object().shape({
    username: yup.string().required("Digite seu nome"),
    email: yup.string().email("Digite um email válido").required("Digite seu email").max(250, "Máximo 250 caracteres"),
    password: yup.string().required("Digite sua senha"),
    confirmPassword: yup.string().required("Confirme sua senha").oneOf([yup.ref("password"), "Confirme sua senha"])
  })
  const {register, handleSubmit, formState: {errors}} = useForm<iSign>({resolver: yupResolver(schema)})

  const submitedForm = async (data: iSign) => {
    const sign = await api.post('/users', {
      username: data.username,
      email: data.email,
      password: data.password
    }).then(( res: AxiosResponse)=>{
      console.log(res)
      if(res.status === 201 ){
        toast.success('😻 Cadastrado com sucesso!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      }
    }).catch((err: AxiosError) => {
        if(err.request?.status === 409 ){ 
          toast.warning('😿 Email já está em uso!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
            console.log(sign)
        }
      }
    )
  }   
  return (
    <div className={styles.div}>
      <div className={styles.div_header}>
        <Header type='icon'/>
      </div>
      <p className={styles.div_title}>CATastre-se</p>
      <div className={styles.div_}>
        <div className={styles.div_div}>
          <div className={styles.div_div_border}>
            <form className={styles.div_div_border__form} onSubmit={handleSubmit(submitedForm)}>
              <ToastContainer /> 
              <img src={catInput} alt="Gatinho input" className={styles.div_div_border__form_icon}/>
              <Input type="name" placeholder="Digite seu nome" label='Nome' {...register("username")}/>
              <span>{errors.username?.message}</span>
              <Input type="email" placeholder="Digite seu email" label='Email' {...register("email")}/>
              <span>{errors.email?.message}</span>
              <Input type="password" placeholder="Digite sua senha" label='Senha' {...register("password")}/>
              <span>{errors.password?.message}</span>
              <Input type="password" placeholder="Confirme sua senha" label='Confirmar senha' {...register("confirmPassword")}/>
              <span>{errors.confirmPassword?.message}</span>
              <div className={styles.div_div_border__form_button}>
                <div className={styles.div_div_border__form_button_um}> 
                    <Button option={1} >Catastre-se</Button>
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
