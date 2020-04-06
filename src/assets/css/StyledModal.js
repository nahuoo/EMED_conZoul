import styled from 'styled-components'

const StyledModal = styled.div `
    background: rgba(0, 0, 0, 0.2);
    position: relative;
    background-size: cover;
    margin: 0px;
    padding: 0px;
    height: 100%;
    

   


    .rectangulo{ 
        background: linear-gradient(124deg, rgba(22,161,178,0.4) 0%, rgba(255,255,255,1) 29%, rgba(255,255,255,1) 75%, rgba(179,0,0,0.4) 100%);
        position:fixed;
        display:flex;
        align-items:center;
        flex-direction:column;
        justify-content: space-around;
        text-align: center;
        padding: 10px;
        height: 30%;
        width:20%;
        top:30vh;
        left:37vw;
        border: 2px solid #E3E3E3;
        border-radius: 30px;
        box-shadow: 20px 20px 30px -5px rgba(0, 0, 0, 0.2);
        

    }

    h2{
        font-size: 2em;
        font-family:'Neuton', serif;
        color: black;
        
    }

    p{
        font-family:'Neuton', sans-serif;
        color: black;
        font-size: 1.2em;
    }

    button{
        width: 100px;
        background-color: white;
        border: 1.5px solid #E3E3E3;
        border-radius: 30px;
        cursor: pointer;
        color: #2c2c2c;
        :hover{
            border: 2px solid red;}
      
    }
`

export default StyledModal