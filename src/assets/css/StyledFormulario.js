import styled from 'styled-components'

const StyledFormulario = styled.div `

    display: flex;
    flex-direction: column;
    padding:10vh;
    margin-top:10px;
    align-content: center;
    justify-content:center;
    font-family: 'Roboto', sans-serif;
    background: rgba(255, 255, 255, 0.5);
    padding-left: 30%;

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
      text-align:center;
      padding-left:0;
      width: 20%;
      min-width:60px;
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
    text-align: flex-start;   
   padding-right: 0%;
   padding-top: 10px;
   padding-bottom: 10px;
   margin-bottom:30px;
   padding-left: 10%;

    
 }

 @media screen and (max-width: 800px){

   

   h2{
      padding-left: 10%;
}
}
 
 @media screen and (max-width: 500px){

   padding-left: 15%;
   justify-content: center;


   input,textarea{ 
    ::placeholder{
       margin-left:15px;
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
   color:white;
   left:0px;
   background:rgba(199, 0, 5, 0.8);
   padding-left:0px;
   width: 25%;

 }

 textarea{
    left:0px;
    width:47vw;
 }
}
  `

  export default StyledFormulario



  /* 

  display: flex;
    flex-direction: column;
    padding:10vh;
    margin-top:0px;
    align-content: center;
    justify-content:center;
    font-family: 'Roboto', sans-serif;
    background: rgba(255, 255, 255, 0.5);
    padding-left: 15%;

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


    */