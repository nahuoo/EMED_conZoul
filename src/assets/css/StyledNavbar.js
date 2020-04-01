import styled from 'styled-components'

const StyledNav = styled.nav`
/* Contenedor padre, es un <nav> */
  display: flex;
  justify-content: flex-end; 
  flex-wrap: nowrap;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 50px;
  padding: 4px;
  background: ${(props) => props.background|| 'rgba(0,0,0,0)'};
  color: #FFFFFF;
  z-index: 22;
  font-size: 110%;
  font-family: 'Neuton', serif;
  transition: all 0.8s ease-out;
  overflow-x: hidden;


  .Animation{
    animation: fadeIn ease 6s;
      -webkit-animation: fadeIn ease 6s;
      -moz-animation: fadeIn ease 6s;
      -o-animation: fadeIn ease 6s;
      -ms-animation: fadeIn ease 6s;
    
    @keyframes fadeIn {
      0% {
        opacity:0;
      }
      100% {
        opacity:1;
      }
    }
    
    @-moz-keyframes fadeIn {
      0% {
        opacity:0;
      }
      100% {
        opacity:1;
      }
    }
    
    @-webkit-keyframes fadeIn {
      0% {
        opacity:0;
      }
      100% {
        opacity:1;
      }
    } 
  } 

  /* ListaLink es el <ul> que con tiene todos los <li> */
  .ListaLink{
    margin-right: 3%;
    }
  
  /* Estos son los li dentro de los <ul> */
  .ListaLink li{
    display: inline-block;
    padding: 0px 3px;
  }


  /* el logo del navbar responsive */
.burger{
  
  cursor:pointer;
  display:none;
  right: 4vw;
}

 .burger div{
   width:25px;
   height:5px;
   background-color: white;
   margin:5px;
   
 }

  /* La animacion del navbar mobile */
 /* @keyframes ActiveShow {
    0%{
      opacity: 0;
      transform: translateX(100%);
    }
    100%{
      opacity: 1;
      transform: translateX(0%);
    }
  } */

 /* el navbar de mobile */


  @media (max-width: 980px) {
    .ListaLink{
      margin-top:auto;
      padding:0px;
      display: flex;
      position: fixed;
      flex-direction: column;
      width:250px;
      border-radius:0;
      background: rgba(22, 161, 178,0.8);
      transition: all 0.5s ease-in;
      height:100vh;
      top:8vh;
    }
    
    .active{
      transform: translateX(0%);
      opacity: 100%;
    }
    .hidden{
      transform: translateX(100%);
      opacity: 0%;
    }

    .ListaLink li{
      width: 100%;
      background: rgba(22, 161, 178,0.8);
      text-align: center;
      border-top: 0.2px solid white;
      border-bottom: 0.2px solid white;
      padding: 30px 0;
    }
      .burger{
        display: inline-block;
        margin-right: 20px;
        
      }

    }

  
  /* .link son los <a> y <navlinks> dentro de los <Li> */
  .link{
    color: white;
    transition: all 0.2s ease 0s;
    text-decoration: none;
    border-radius: 5px;
    padding: 10px 14px 9px;
    letter-spacing: 1px;
  }
  /* Segunda clase que le di a los iconos de FB e Insta ya que tienen distintas dimensiones que las letras, asi que les ajusto el padding */
  .icono{
    padding: 17px 10px 7px;
  }
  /* Efecto de fondo blanco en los items links */
  .selected:hover{
    background-color: rgba(234, 241, 241, 0.3);
    color: #fff; 
    
  }


  /* Div contenedor de la <img> con el logo */
  .logo{
    position: absolute;
    padding: 5px;
    height: 3rem; 
    left: 20px;
  }
  /* Clase del texto del logo para que este bien alineado a todo */
  .title{
    position: relative;
    cursor: default;
    padding: 0;
    bottom: 13px;
    text-decoration: none;
  }
  /* Ajusto la imagen para que tome el 100% tamaño del div contenedor */
  .logo img {
    max-width: 100%;
    max-height: 100%;
  }

  
`

export default StyledNav;