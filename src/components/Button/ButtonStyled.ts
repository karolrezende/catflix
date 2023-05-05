import styled from 'styled-components'
interface iPropsStyled{
    option: 1 | 2
}
export const ButtonStyled = styled.button<iPropsStyled>`
    background: ${props=> props.option === 1 ? "#FFF" :'transparent'};
    color: ${props=> props.option === 1 ? "#000" :'#FFF'};
    border: ${props=> props.option === 1 ? "none" :'1px solid #FFF'};
    width: 100%;
    height: 40px;
    border-radius: 8px;
    font-weight: 700;
    :hover{
        background: ${props=> props.option === 1 ? "#d0d0d0" :'transparent'};
        color: ${props=> props.option === 1 ? "#000" :'#d0d0d0'};
        border: ${props=> props.option === 1 ? "none" :'1px solid #d0d0d0'};
        cursor: pointer;
    }
`
