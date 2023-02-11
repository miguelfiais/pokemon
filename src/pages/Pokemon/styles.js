import styled, { css } from "styled-components";
import background from "../../assets/background.jpg"

export const Container = styled.div`
   
`
export const Nav = styled.nav`
    padding: 1rem 2rem;
    background-color: #585858;
    button{
        padding: .5rem 1.5rem;
        background-color: #f75858;
        border: none;
        font-weight: 600;
        font-size: 14px;
        color: #FFFFFF;
        border-radius: 8px;
    }
`
export const Div = styled.div`
    width: 100vw;
    min-height: calc(100vh - 66px);
    background: url("${background}") center no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2rem;
    gap: 2rem;
`

export const MainPokemon = styled.main`
    background: rgba(255,255,255,0.4);
    backdrop-filter: blur(6px);
    border-radius: 12px;
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    max-width: 800px;
    width: 98%;
    gap: 3rem;
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        font-weight: 600;
        font-size: 18px;
        color: #000000;
        text-transform: capitalize;
        img{
            width: 100%;
        }
    }
    @media screen and (max-width: 600px) {
        flex-direction: column;
        width: 90%;
        div{
            align-self: center;
            img{
                width: 90%;
            }
        }
        align-items: flex-start;
    }
`
export const Status = styled.ul`
    list-style: none;
    li{
        font-weight: 500;
        font-size: 20px;
        text-transform: capitalize;
        margin-bottom: 10px;
        span{
            font-size: 18px;
            line-height: 22px;
            color: #505050;
        }
    }
    h2{
        margin-bottom: 1rem;
    }
`
export const ContainerEvolution = styled.div`
   
`
export const CardEvolution = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    background: rgba(255,255,255,0.4);
    backdrop-filter: blur(6px);
    border-radius: 12px;
    padding: 1rem;
    cursor: pointer;
    border: 1px solid #EB5757;
    &:hover{
        transform: scale(1.1);
        transition: 0.6s;
    }
    &:active{
        opacity: 0.8;
    }
    img{
        width: 80px;
    }
    p{
        font-size: 16px;
        font-weight: 600;
        text-transform: capitalize;
    }
    ${({isOpen}) => isOpen && css`
        display: none;
    `}
`
export const Modal = styled.div`
    display: none;
    ${({isOpen}) => isOpen && css`
        display: block;
    `}
`
export const PokemonEvolution = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 1rem;
    background: rgba(255,255,255,0.4);
    backdrop-filter: blur(6px);
    button{
        position: absolute;
        top: 1rem;
        right: 1rem;
        background-color: transparent;
        border: none;
        svg{
            width: 25px;
            height: auto;
        }
    }
    img{
        width: 100%;
        max-width: 150px;
        margin-bottom: 5px;
    }
    p{
        font-size: 16px;
        font-weight: 600;
        text-transform: capitalize;
        text-align: center;
    }
`
export const StatusEvolution = styled.ul`
    list-style: none;
    li{
        font-weight: 500;
        font-size: 18px;
        text-transform: capitalize;
        span{
            font-size: 16px;
            line-height: 22px;
            color: #505050;
        }
    }
    h2{
        margin-bottom: 1rem;
    }
`