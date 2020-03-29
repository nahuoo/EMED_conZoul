import styled from 'styled-components'

const StyledFormulario = styled.div `

    display: flex;
    flex-direction: column;
    margin: 10vh;
    align-content: center;
    justify-content:center;
    font-family: 'Roboto', sans-serif;
    

 input{ 
    position:relative;
    background-color: transparent;
    border: 1px solid #E3E3E3;
    border-radius: 30px;
    color: #2c2c2c;
    height: 2em;
    width: 40vw;
    font-size: 0.8571em;
    display: flex;
    flex-direction: column;
    margin: 3vh;
    align-content: center;
    justify-content:center;
    left:22vw;
    font-family: 'Roboto', sans-serif;
    
    


  -webkit-transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  -moz-transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  -o-transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  -ms-transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  -webkit-box-shadow: none;
  box-shadow: none; 
 }

 input:focus, textarea:focus{
    border-radius: 0.25rem 0.25rem 0 0;  
    color: #2c2c2c;
    
    
 }

 h2{
    font-family: 'Neuton', serif;
    font-size:2rem;
    letter-spacing: 0.5px;
    color: black;
    text-align: center;
    margin-left: 1vw;
    
 }
 
 
  `

  export default StyledFormulario