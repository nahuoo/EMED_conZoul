import Styled from 'styled-components'

export const ServiciosWrapper = Styled.div `
    height: 100vh;
    background: white;
    display:flex;
    padding: 15vh;
    justify-content: center;
    align-items: flex-start;
    
    
`

export const Card = Styled.div `
    height: 50%;
    margin: 10vh;
    font-family: 'Archivo', serif;
    font-size:1rem;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    p{
        text-align:center;
    }
    i{
        font-size: 8rem;
        margin-bottom: 20px;
    }
`