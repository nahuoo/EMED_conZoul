import React from 'react'
import Styled from 'styled-components'
import elektronika from '../assets/img/logos/77elek.png'
import giumelli from '../assets/img/logos/giumelli.jpg'
import ipe from '../assets/img/logos/ipe.jpg'
import sanjor from '../assets/img/logos/logo_san_jor.png'
import zeiss from '../assets/img/logos/zeiss.jpg'
import montebio from '../assets/img/logos/MONTEBIO.png'
import presvac from '../assets/img/logos/PRESVAC.jpg'
import biosensor from '../assets/img/logos/sd biosensor.png'
import snibe from '../assets/img/logos/SNIBE.png'
import vicking from '../assets/img/logos/vicking.png'
import diestrovete from '../assets/img/logos/Logo-Diestrovete.png'


const Body = Styled.div`
	align-items: center;
	background: #fff;
	display: flex;
	justify-content: center;
	height: 20vh;
	margin:0px;
	

// Animation
@keyframes reversa {
	0% { transform: translateX(-3100px); }
	100% { transform: translateX(500px)}
}





	.sliderReversa {
	background: white;
	box-shadow: 0 10px 20px -5px rgba(0, 0, 0, .125);
	height: auto;
	margin-top: 0vh;
	overflow:hidden;
	position: relative;
	width: 100%;
	align-items: center;
    justify-content: center;
    display: flex;	
	
    &::before,
	&::after {
		background: linear-gradient(90deg rgba(251,253,251,0), rgba(255,255,255,1));
		content: "";
		height: 100px;
		position: absolute;
		width: 200px;
		z-index: 2;
	}
	
	&::before {
		left: 0;
		top: 0;
	}

	/* la cinta entera */
	
	.slide-trackReversa{
		animation: reversa 100s linear infinite;
		display: flex;
		width:100px;
	}
	
	/* Cada imagen */

	.slide {
		height: 90px;
		width: auto;
		margin-left:4vw;
		
	}
	}`
 /* el contenedor de la cinta */

const imagenes = [elektronika, sanjor, zeiss, montebio, diestrovete, presvac, biosensor,  snibe, giumelli, diestrovete, vicking, ipe, elektronika, sanjor, zeiss, montebio,  diestrovete, presvac, biosensor,  snibe, giumelli, vicking, ipe, elektronika, sanjor, zeiss, diestrovete, montebio, presvac, biosensor,  snibe, vicking, ipe]

const listImagenes = imagenes.map((img) => <div className="slide"><img src={img} height='90%' width='auto' alt='' /></div>)


const Marcas = () => {
 
    return(
		<Body>
			<div class="sliderReversa">
	            <div class="slide-trackReversa">
                    {listImagenes}
            	</div>				
            </div>
        </Body>
	    )}


export default Marcas