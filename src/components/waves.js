import React from "react"
import Wave from 'react-wavify'
import styled from 'styled-components'

const StyledWaves = styled.div `
   
  
	margin: 30px, 0px, 0px; 
  padding: 0px;
  border-style: none solid none solid;
  border-color: #000;
  color: rgba(255, 255, 255, 0.5); 
  position: relative;
  background: linear-gradient(rgba(0,0,0,0),white);
  width: 100%;
 
  height: 22vh; 
   
  
  background-repeat: no-repeat; 
  background-size: cover ;
  overflow:hidden;
  `
  

function WavesSection () {
  return(
    <>

    <StyledWaves>
      <Wave 
      Style={{margin:0, paddin:0, border:0}}
      fill='url(#gradient)'
      paused={false}
      options={{
        height: 10,
        amplitude: 15,
        speed: 0.3,
        points: 6
      }}>

        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="20%"  stopColor="#16A1B2" />
            <stop offset="80%" stopColor="#fff" />
          </linearGradient>
        </defs>
      </Wave>
      </StyledWaves>
    </>
   ) };

export default WavesSection;




  

//<mask id="mask">
//  <rect x="0" y="0" width="2000" height="200" fill="url(#gradient)"  />
//</mask>
//</defs>