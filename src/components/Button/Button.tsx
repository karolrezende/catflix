import { ButtonStyled }from './ButtonStyled'
interface iProps {
  option: 1 | 2,
  children: string
}
export default function Button({option, children}: iProps) {
  return (
    <ButtonStyled option={option}>{children}</ButtonStyled>
  )
}
