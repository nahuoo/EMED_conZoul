import styled from 'styled-components'

const StyledModal = styled.div ` 
    
        display: ${(props) => props.modal|| 'none'};
        
    .modal{
        margin: 0px;
        padding: 0px;
        position:fixed;
        background: black; 
        height: 100%;
           
    }

    .rectangulo{ 
        
        background: #273441;
        position:fixed;
        display:flex;
        align-items:center;
        flex-direction:column;
        justify-content: space-around;
        text-align: center;
        padding: 10px;
        height: 50%;
        width:50%;
        top:20vh;
        left:25vw;
        border: 2px solid #E3E3E3;
        border-radius: 30px;
        box-shadow: 20px 20px 30px -5px rgba(0, 0, 0, 0.2);

        

    }

    h2{
        font-size: 2em;
        font-family:'Neuton', serif;
        color: white;
        
    }

    p{
        font-family:'Neuton', sans-serif;
        color: white;
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