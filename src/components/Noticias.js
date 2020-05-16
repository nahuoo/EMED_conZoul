import React from 'react'
import Styled from 'styled-components'
import imagen from '../assets/img/sd2.jpg'
import imagen2 from '../assets/img/sd3.jpg'
import png from '../assets/img/f100.png'
import FadeIn from './FadeIn'
import FadeLeft from './FadeLeft'
import FadeRight from './FadeRight'


const Vsg = Styled.div`
  
  clip-path: circle(80% at 50% 0%);
  height: 145vh;
  background: linear-gradient(0deg, rgba(230,230,230,1) 20%, rgba(239,239,239,1) 60%, rgba(255,255,255,1) 100%);
  z-index:-2;
  margin-top: -50vh;
  margin-bottom: -50vh;

  img{
    height: 30vh;
  }
  @media screen and (max-width: 500px) {
    display:none;
  }
`

const Png = Styled.div`
  display:flex;
  background: white;
  height:100vh;
  @media screen and (max-width: 500px) {
    display:none;
  }
  
`

const NoticiasDiv = Styled.div`
    background:white;
    padding: 0 5vw;
    padding-left: 12%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    h2{
      left: 10px;
      font-size: 2em;
      margin-bottom: .5em;
    }
    .hr{
      background:red;
      color:red;
    }
    p{
      left:10px;
      margin-top:.5em;
    }
    overflow:hidden;

    @media screen and (max-width: 500px) {
        height:200vh;
        display:flex;
        flex-direction:column;
        padding-left:20px;

        align-items:center;
        justify-content: center;
      img{
      height: 300px;
      }
      h2{
      
      font-size: 2em;
      margin-bottom: .5em;
    }
    p{
      margin-top:.5em;
    }
    }
`

const Subtitulo = Styled.p`
    color:grey;
    font-size: .5;

`
const Noticias = () => {


    return(
      <>
        
      
          <Vsg>
            
          </Vsg>
       
        <Png>
         
        </Png>
         
                <NoticiasDiv  id='noticias' >
                  <h2>Novedades</h2>
                  <div></div>
                 <FadeLeft>
                    <div>
                        <h2>STANDARD F100 Analyzer</h2>
                        <Subtitulo>Sistemas de inmunoensayo fluorescentes diseñados para una medición fácil y confiable de diversos artículos..</Subtitulo>
                        <hr></hr>
                        <p>LARGO VENCIMIENTO ( 18 MESES )</p>
                        <p>Enfermedades respiratorias y Dengue !</p>
                        <p>y además hormonas!</p>
                        <br />
                        Simple y fácil de usar - Familiar lateral flow test platform
                        <br />
                        <br />
                        <ul>
                          <li>DIMERO D</li>                      
                          <li>PROCALCITONINA</li> 
                          <li>TROPONINA</li> 
                          <li>HEMOGLOBINA GLICOSILADA</li> 
                          <li>CkMB FIA</li> 
                          <li>B-HCG</li> 
                        </ul>
                    </div>
               </FadeLeft>
               <FadeRight>
              <img src={imagen2} alt='Sd2' />
             </FadeRight>
             <FadeRight>
                <img src={imagen} alt='Sd' /> 
            </FadeRight>
            <FadeIn>
              <div>
                <ul>
                  <li>REACTIVOS A TEMPERATURA AMBIENTE</li> 
                  <li>PARAMETROS CUANTITATIVOS</li>
                </ul> 
                <ul>
                  <li>INFLUENZA A/B</li>
                  <li> ADENO ESPIRATORIO</li>
                  <li>STREP A</li>
                  <li>LEGIONELLA</li>
                  <li>T4 - FT4 – TSH - LH</li>
                </ul>
                <br />
                <ul>
                  <li>RSV</li>
                  <li>MICROALBUMINURIA</li>
                  <li>PRO BNP</li>
                  <li>S PNEUMOINIAE FIA</li>
                  <li>SANGRE OCULTA CUANTITATIVA</li>
                  <li>DENGUE</li>   
                </ul>
              </div>
          </FadeIn>
          </NoticiasDiv>
        
        </>
    )
}

export default Noticias