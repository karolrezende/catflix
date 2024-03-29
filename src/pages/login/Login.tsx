import Header from '../../components/Header/Header'
import styles from './styles.module.scss'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import Footer from '../../components/Footer/Footer'
import catInput from '/public/cathappy.png'
import catSleep from '/public/catsleep.png'
import catSit from '/public/catsit.png'
import catBit from '/public/bigCat.png'
import { Link, useNavigate } from 'react-router-dom'
import { useUserContext } from '../../providers/UserProvider.tsx'

import * as yup from 'yup'; 
import { useForm } from "react-hook-form"; 
import { yupResolver } from '@hookform/resolvers/yup';
import { api } from '../../app/apiConection'
import { AxiosError, AxiosResponse } from 'axios'
import { useState } from 'react'

interface iLogin{
  email: string, 
  password: string
}

export default function Login() {
  const {tokenSetter} = useUserContext()
  const navigate = useNavigate()

  const schema = yup.object().shape({
    email: yup.string().required("Digite seu email").email("Digite um email valido"),
    password: yup.string().required("Digite sua senha")
  });
  const { register, handleSubmit, formState:{errors}} = useForm<iLogin>({resolver: yupResolver(schema)})
  const [wrongPassword, setWrongPassword] = useState('')
  async function handleLoginSubmit(data: iLogin){
    await api.post('/login',{
      email: data.email,
      password: data.password
    }).then((res: AxiosResponse)=>{
      const token: any = res.data.token
      tokenSetter({token})
      localStorage.setItem("token", JSON.stringify(token))
      console.log(res.data.token)
      navigate('/profile')
      
    }).catch((err: AxiosError) =>{
      console.log("deu erro", err.request?.status)
      if(err.request?.status === 401){
        setWrongPassword("Email/senha incorreto")
      }
    })
  }

  return (
    <div className={styles.div}>
      <div className={styles.div_header}>
        <Header type='icon'/>
      </div>
      <p className={styles.div_title}>Entre para acessar</p>
      <div className={styles.div_}>
        <div className={styles.div_div}>
          <div className={styles.div_div_border}>
            <form className={styles.div_div_border__form} onSubmit={handleSubmit(handleLoginSubmit)}>
              <img src={catInput} alt="Gatinho input" className={styles.div_div_border__form_icon}/>
              <Input type="name" placeholder="Digite seu email" label='Email' {...register("email")}/>
              {errors.email?.message}
              <Input type="password" placeholder="Digite sua senha" label='Senha' {...register("password")}/>
              {errors.password?.message}
              <span>{wrongPassword}</span>
              <div className={styles.div_div_border__form_button}>
                <div className={styles.div_div_border__form_button_um}> 
                    <Button option={1} >Entrar</Button>
                </div>
                <p className={styles.div_div_border__form_p1}>Ainda não possui conta?</p>
                <p className={styles.div_div_border__form_p2}>Ou</p>
                <div className={styles.div_div_border__form_button_2}>
                  <Link to='/cadastro'>
                    <Button option={2}>Catastre=se</Button>
                  </Link>
                </div>
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
      <Footer/> 
    </div>
  )
}
