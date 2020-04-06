import styled from 'styled-components';

  

const PageHeader = styled.div `

  display: flex;  
  flex-wrap: nowrap;
  margin: 0; 
  padding: 0px;
  position: relative;
  align-items:center;
  width: 100%;
  max-width: 100%;
  height: 110vh;  
  overflow:hidden;

    .contenedor{
        text-align: left;
        position: relative;
        align-items: center;  
        height:15vh;
        padding:2rem;
        padding-top:1rem;
        width:40vw;
        background: rgba(199, 0, 5, 0.8);
        top: -20px;
                 
    }

    .imagen{
        width: "150";
        align-content:center;
        justify-content: flex-start;
        margin-left: 24px;
        margin-top: 14%;
        z-index: 1;
    }

    span{
        position: absolute;
        top:34vh;
        margin-left:40%;
    }
    .button{
        position:relative;
        text-align: center;
        background-color: transparent;
        border: 1px solid #E3E3E3;
        border-radius: 30px;
        text-decoration: none;
        color: #F9F8F8;
        height: 2.2em;
        left:3%;
        width: 12vw;
        font-size: 0.8571em;
        margin-top:0px;
        letter-spacing:1;
        cursor:pointer;
            :hover{
                background:black;
                border: 1px solid #000
                }
        font-family: 'Roboto', sans-serif;
    }

    .descripcion{
        position:absolute;
        background: rgba(255, 255, 255, 0.5);
        height: 10vh;
        top: 70vh;
        width:100%;
    }

    h3{
        
        font-family: 'Roboto', sans-serif;
        font-size: 1.5rem;
        padding-top:.5rem;
        letter-spacing: 0.5px;
        color: black;
        text-align: center;
        
    }

    h1{
        font-family: 'Neuton', serif;
        font-size: 5rem;
        letter-spacing: 0.5px;
        color: white;
        text-align: left;
        margin-left: 1vw;
        
    }

    h2{
        margin: 2%;
    }
@media screen and (max-height: 800px) {
    h1{
        font-size:3rem;
        max-width: 100vh;
    }
   

}
    h2{
        font-family: 'Roboto', sans-serif;
        font-size:1rem;
        letter-spacing: 1.5px;
        color: black;
        margin-left: 1vw;
    }
    
    @media screen and (max-width: 400px) {
        height: 117vh;      
     }
    
    @media screen and (max-width:1076px) {
        .contenedor{
        width:500px;
        height:100px;
      }
      button{
            width: 150px;
            
            }
        
    }
    @media screen and (max-width: 425px) {
       
        span{
        top:150px;
        left:0x;
            
    }
        img{
            height:150px;
        }
        h1{
        margin-left: 0;
    }

    }
     @media screen and (max-width: 500px) {

        height:120vh; 

        .contenedor{
        width:350px;
        height:125px;
        padding:3px;
        padding-top:0rem;
        top:-100px;
        }

        .descripcion{
        position:absolute;
        background: rgba(255, 255, 255, 0.5);
        height: 24vh;
        top: 65vh;
        width:100%;
    }

      span{
        position: absolute;
        top:10vh;
        left:-10vw;
    }

    h1{
        padding:3px;
        margin-left: 3px;
        font-size: 2.5rem;
    }

      
    

     button{
            width: 100px;
            background: rgba(199, 0, 5, 0.8);
            left: 35%;
            margin-top: 20px;
            border: 0px solid #000;
        }
    }
    @media screen and (max-height: 300px) {
        height: 150vh; 

        span{
        position: absolute;
        top:8vh;
        left:27vw;
    }

    .descripcion{
        position:absolute;
        background: rgba(255, 255, 255, 0.5);
        height: 24vh;
        top: 100vh;
        width:100%;
        
    }
    }
`;

export default PageHeader;