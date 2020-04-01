import styled from 'styled-components'

const StyledFormulario = styled.div `

    display: flex;
    flex-direction: row;
    margin:5%;
    padding:5%;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
    background: rgba(255, 255, 255, 0.5);
    padding-left: 10%;

 input,textarea{ 
    position:relative;
    background-color: white;
    border: 1px solid #E3E3E3;
    border-radius: 30px;
    color: #2c2c2c;
    height: 2em;
    width: 55%;
    min-width:200px;
    font-size: 0.8571em;
    display: flex;
    flex-direction: column;
    margin: 2%;
    align-items: center;
    justify-content:center;
    font-family: 'Roboto', sans-serif;
    padding-left:20px;


  -webkit-transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  -moz-transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  -o-transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  -ms-transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  -webkit-box-shadow: none;
  box-shadow: none; 
 }

 .texto{
    height: 100px;
    padding-top:10px;
    text-align: left;
 }

 .submit{
      width: 3vw;
      color:white;
      background:rgba(199, 0, 5, 0.8);
      padding-left:10%;
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
   padding-right: 10%;
   margin-bottom:30px;
    
 }
 
 @media screen and (max-width: 500px){

   input,textarea{ 
    ::placeholder{
       margin-left:10px;
    }
    padding-left: 1px;
    width: 50vw;
    font-size: 0.8571em;
    display: flex;
    margin: 3vh;
    left:0px;
 }

 .submit{
   text-align: center;
   width: 20vw;
   color:white;
   left:0px;
   background:rgba(199, 0, 5, 0.8);
   padding-left:15px;

 }

 textarea{
    left:5px;
    width:47vw;
 }
}
  `

  export default StyledFormulario