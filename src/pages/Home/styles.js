import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    img{
        width: 80%;
        max-width: 600px;
    }
    form{
        display: flex;
        justify-content: center;
        gap: 10px;
        width: 90%;
        max-width: 600px;
        input{
            width: 75%;
            height: 40px;
            padding-left: 12px;
            border: 1px solid #BDBDBD;
            border-radius: 12px;
            outline: none;
        }
        button{
            padding: 0 1rem;
            background: #2F80ED;
            box-shadow: 0px 2px 6px rgba(127, 177, 243, 0.4);
            border-radius: 12px;
            border: none;
            font-weight: 600;
            font-size: 14px;
            color: #FFFFFF;
        }
    }
`