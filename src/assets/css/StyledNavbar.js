import styled from 'styled-components'

const StyledNav = styled.nav`
/* /////////////////////////////////////////////// */
/*                    GENERAL                      */
/* /////////////////////////////////////////////// */
  position: fixed;
  width: 97vw;
  height: 9vw;
  padding: 3vw;
  display: flex;
  justify-content: flex-end; 
  align-items: center;
  z-index: 1;
  background: ${(props) => props.background|| 'rgba(0,0,0,0)'};
  font-family: 'Neuton', serif;
  font-size: 110%;
  color: white;
  z-index: 1500;

/* /////////////////////////////////////////////// */
/*                    LOGO                         */
/* /////////////////////////////////////////////// */
.logo{
    position: absolute;
    height: 8vw; 
    top: 0.5vw;
    left: 5vw;
  }
  .logo img {
    max-width: 150%;
    max-height: 150%;
  }
  .title{
    position: relative;
    cursor: pointer;
    padding-top: 3px;
    font-family: 'Neuton', serif;
    font-size:1.2rem;
    bottom: 4.1vw;
    left: 2vw;
    letter-spacing: 0.5pt;
  }
  /* Animaciones del navbar */
  @keyframes fadeIn {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }
  .Animation{
    animation: fadeIn ease 6s;
  }
/* /////////////////////////////////////////////// */
/*                    BURGUER                      */
/* /////////////////////////////////////////////// */
  .burger {
    margin-right: 4vw;
  }
  .burger div{
   width:30px;
   height:5px;
   background-color: white;
   margin:5px;
   transition: all 0.5s ease-in-out;
  }
  .on1{
    transform: translateY(10px) rotate(135deg);
  }
  .on2{
    opacity: 0;
  }
  .on3{
    transform: translateY(-10px) rotate(-135deg);
  }
/* /////////////////////////////////////////////// */
/*                    MENU                         */
/* /////////////////////////////////////////////// */
  .ListaLink{
    display: flex;
    position: fixed;
    flex-direction: column;
    background: rgba(22, 161, 178,0.8);
    top: 15vw;
    padding: 5vw 10vw;
    transition: all 0.5s ease-in;
  }
  .ListaLink li{
    width: 80vw;
    text-align: center;
    border-bottom: 1px solid white;
    padding-bottom: 4vw;
    margin-bottom: 4vw; 
    padding-top: 0;
    margin-top: 0;
  }
  .link{
    padding-top: 0;
    margin-top: 0;
    text-decoration: none;
    font-size: 1.3rem;
    font-weight: bold;
    color: white;
    letter-spacing: 1pt;
    transition: all 0.2s ease 0s;
    
  }
  ul li:last-child{
    padding-bottom: 0;
    margin-bottom: 0;
    border: none;
  }
  .link:hover{
    color: red;  
  }
  .icono {
    margin: 0 5vw;
    display: inline;
  }
  /* Animaciones del menu */
  .active{
    transform: translateY(0%) translateX(0%) scale(1);
    opacity: 100%;
  }
  .hidden{
    transform: translateY(-56%) translateX(43%) scale(0);
    opacity: 0%;
  }
  .activeProds{
    opacity: 100%;
    z-index: 2;
  }
  .hiddenProds{
    opacity: 0%;
    z-index: -2;
  }
  .productos{
    position: absolute;
    background: rgba(22, 161, 178, 0.8);
    top: 0;
    right: 0;
    padding: 5vw 10vw;
    transition: all 0.6s ease-in;
    ul {
      display: flex;
      flex-direction: column;
    }
    ul li{
      text-align: left;
      font-size: 1rem;
      margin-bottom: 2vw;
      padding-bottom: 2vw;
    }
  }

  


/* /////////////////////////////////////////////// */
/*                    Tablet                       */
/* /////////////////////////////////////////////// */
@media (min-width: 650px) {
  width: 100vw;
  height: 2.5vw;

  .logo{
    height: 5vw; 
  }
  .title{
    bottom: 2.5vw;
  }

  .ListaLink{
    top: 8.5vw;
    padding: 2.5vw 5vw;
    height: 100vh;
  }
  .ListaLink li{
    width: 40vw;
    padding-bottom: 2vw;
    margin-bottom: 2vw; 
  }
  .productos{
    position: absolute;
    background: rgba(22, 161, 178, 0.8);
    width: 93vw;
    padding: 2vw 5vw;
    top: 0;
    right: 0;
    transition: all 0.6s ease-in;

    ul {
      flex-direction: column;
      flex-wrap: wrap;
      display: flex;
      height: 40vw;
    }
    ul li{
      width: 30vw;
      text-align: left;
      font-size: 0.6em;
      margin-bottom: 2vw;
      padding: 0 2vw 2vw;
    }
    ul li:last-child{
      border-bottom: 1px solid white;
      padding-bottom: 2vw;
      margin-bottom: 2vw; 
    }
  }
}
/* /////////////////////////////////////////////// */
/*                    Desktop                      */
/* /////////////////////////////////////////////// */
@media (min-width: 1000px) {
  height: 3vw;
  padding: 0.3vw;
  padding-bottom: 0.7vw;
/* LOGO */
  .logo{
    height: 2.4vw;
    top: 0;
  }
  .title{
    bottom: 1.3vw;
    font-size:1.5rem;
    left: 1vw;
    color: #fff;
  }
  .burger{
    display:none;
  }
  /* MENU */
  .hidden{
    transform: none;
    opacity: 100%;
  }
  .ListaLink{
    display: initial;
    height: initial;
    position: static;
    flex-direction: row;
    background: none;
    top: 0;
    padding: 0;
    transition: all 0.5s ease-in;
    margin-right: 3%;
    
  }
  .ListaLink li{
    width: initial;
    text-align: center;
    border-bottom: none;
    padding-bottom: 0;
    margin-bottom: 0; 
    padding-top: 0;
    margin-top: 0;
    display: inline-block;
    padding: 0px 3px;
  }
  .link{
    margin-top: 0;
    text-decoration: none;
    font-size: 100%;
    font-weight: initial;
    color: white;
    letter-spacing: 1pt;
    transition: all 0.2s ease 0s;
    border-radius: 5px;
    padding: 10px 14px 9px;
  }
  .icono {
    margin: 0 1vw;
    display: inline;
    padding: 17px 10px 7px;
  }
  .link:hover{
    background-color: rgba(199, 0, 5, 0.8);
    color: #fff;   
    cursor: pointer;
  }
  .navActive{
    color: rgba(199, 0, 5, 0.8);
  }
  .arrow{
    display: inline-block;
    vertical-align: middle;
    width: 0px;
    border-top: 4px solid;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
  }
  .productos{
    position: absolute;
    background: rgba(22, 161, 178, 0.8);
    width: 17vw;
    font-size:0.9em;
    padding-bottom: 1vw;
    padding: 1vw 1.5vw;
    top: 3.9vw;
    right: 5vw;
    transition: all 0.2s ease-in;

    ul {
      flex-direction: column;
      flex-wrap: wrap;
      display: flex;
      height: initial;
    }
    ul li{
      width: 30vw;
      text-align: left;
      font-size: 1em;
      margin-bottom: 1vw;
      padding: 0 1vw 1vw;
    }
    ul li:last-child{
      border-bottom: none;
      padding-bottom: 1vw;
      margin-bottom: 0; 
    } 
  }

}
`  
export default StyledNav
// export const StyledNav = styled.nav`
// /* Contenedor padre, es un <nav> */
//   display: flex;
//   justify-content: flex-end; 
//   flex-wrap: nowrap;
//   align-items: center;
//   position: fixed;
//   width: 100vw;
//   height: 50px;
//   padding: 4px;
//   background: ${(props) => props.background|| 'rgba(0,0,0,0)'};
//   color: #FFFFFF;
//   z-index: 2;
//   font-size: 110%;
//   font-family: 'Neuton', serif;
//   transition: all 0.8s ease-out;
//   overflow-x: hidden;


//   .Animation{
//     animation: fadeIn ease 6s;
//       -webkit-animation: fadeIn ease 6s;
//       -moz-animation: fadeIn ease 6s;
//       -o-animation: fadeIn ease 6s;
//       -ms-animation: fadeIn ease 6s;
    
//     @keyframes fadeIn {
//       0% {
//         opacity:0;
//       }
//       100% {
//         opacity:1;
//       }
//     }
    
//     @-moz-keyframes fadeIn {
//       0% {
//         opacity:0;
//       }
//       100% {
//         opacity:1;
//       }
//     }
    
//     @-webkit-keyframes fadeIn {
//       0% {
//         opacity:0;
//       }
//       100% {
//         opacity:1;
//       }
//     } 
//   } 

//   /* ListaLink es el <ul> que con tiene todos los <li> */
//   .ListaLink{
//     margin-right: 3%;
//     }
  
//   /* Estos son los li dentro de los <ul> */
//   .ListaLink li{
//     display: inline-block;
//     padding: 0px 3px;
//   }


//   /* el logo del navbar responsive */
// .burger{
  
//   cursor:pointer;
//   display:none;
//   right: 4vw;
// }

//  .burger div{
//    width:25px;
//    height:5px;
//    background-color: white;
//    margin:5px;
   
//  }

//   /* La animacion del navbar mobile */
//  /* @keyframes ActiveShow {
//     0%{
//       opacity: 0;
//       transform: translateX(100%);
//     }
//     100%{
//       opacity: 1;
//       transform: translateX(0%);
//     }
//   } */

//  /* el navbar de mobile */



  
//   /* .link son los <a> y <navlinks> dentro de los <Li> */
//   .link{
//     color: white;
//     transition: all 0.2s ease 0s;
//     text-decoration: none;
//     border-radius: 5px;
//     padding: 10px 14px 9px;
//     letter-spacing: 1px;
//   }
//   /* Segunda clase que le di a los iconos de FB e Insta ya que tienen distintas dimensiones que las letras, asi que les ajusto el padding */
//   .icono{
//     padding: 17px 10px 7px;
//   }
//   /* Efecto de fondo blanco en los items links */
//   .selected:hover{
//     background-color: rgba(234, 241, 241, 0.3);
//     color: #fff;   
//   }


//   /* Div contenedor de la <img> con el logo */
//   .logo{
//     position: absolute;
//     padding: 5px;
//     height: 3rem; 
//     left: 20px;
//   }
//   /* Clase del texto del logo para que este bien alineado a todo */
//   .title{
//     position: relative;
//     cursor: default;
//     padding: 0;
//     bottom: 13px;
//     text-decoration: none;
//   }
//   /* Ajusto la imagen para que tome el 100% tamaño del div contenedor */
//   .logo img {
//     max-width: 100%;
//     max-height: 100%;
//   }
//   @media (max-width: 980px) {

//     ul{
      
//       padding:0px;
//       display: flex;
//       position: fixed;
//       flex-direction: column;
//       width:250px;
//       border-radius:0;
//       transition: all 0.5s ease-in;
//       height:calc(100vh - 54px);
//       top:20%;
//     }
    
//     .active{
//       transform: translateX(0%);
//       opacity: 100%;

//     }
//     .hidden{
//       transform: translateX(100%);
//       opacity: 0%;
//     }

//     .ListaLink li{
//       width: 100%;
//       text-align: center;
//       padding: 30px 0;
//       background: rgba(22, 161, 178,0.8);
//     }
//       .burger{
//         display: inline-block;
//         margin-right: 20px;
        
//       }

//     }

  
// `

