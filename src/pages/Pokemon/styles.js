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
    padding: 2rem 0;
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
    gap: 1rem;
    div{
        p{
            font-weight: 600;
            font-size: 18px;
            text-transform: capitalize;
            text-align: center;
            margin-top: 5px;
        }
        img{
            width: 100%;
        }
    }
    @media screen and (max-width: 600px) {
        flex-direction: column;
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
    max-width: 600px;
    width: 98%;
`
export const CardEvolution = styled.div`
    display: block;
    margin: 0 auto;
    width: max-content;
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
        text-align: center;
    }
    ${({isOpen}) => isOpen && css`
        display: none;
    `}
`
export const Modal = styled.div`
    background: rgba(255,255,255,0.4);
    backdrop-filter: blur(6px);
    display: none;
    align-items: center;
    justify-content: space-evenly;
    gap: 1rem;
    padding: 1rem;
    border-radius: 12px;
    div{
        img{
            width: 100%;
            max-width: 150px;
        }
        p{
            text-align: center;
            margin-top: 5px;
            font-weight: 600;
            text-transform: capitalize;
        }
    }
    button{
        position: absolute;
        top: .5rem;
        right: .5rem;
        background: transparent;
        border: none;
        svg{
            width: 25px;
            height: auto;
        }
    }
    @media screen and (max-width: 500px) {
        div{
            img{
                max-width: 100px;
            }
            p{
                text-align: center;
                margin-top: 5px;
                font-weight: 600;
                text-transform: capitalize;
            }
        }
    }
    ${({isOpen}) => isOpen && css`
        display: flex;
    `}
`
export const StatusEvolution = styled.ul`
    list-style: none;
    li{
        font-weight: 500;
        font-size: 18px;
        text-transform: capitalize;
        span{
            font-size: 16px;
            color: #505050;
        }
    }
    h2{
        margin-bottom: 1rem;
    }
    @media screen and (max-width: 500px) {
        li{
            font-weight: 500;
            font-size: 14px;
            text-transform: capitalize;
            span{
                font-size: 12px;
                color: #505050;
            }
        }
    }
`