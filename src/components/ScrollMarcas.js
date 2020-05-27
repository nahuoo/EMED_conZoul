import React from 'react'
import Styled from 'styled-components'
import deltalab from '../assets/img/logos/deltalab.png'
import labix from '../assets/img/logos/labix.png'
import diestro from '../assets/img/logos/Logo-Diestro.png'
import mindray from '../assets/img/logos/MINDRAY.png'
import mindray2 from '../assets/img/logos/MINDRAY.jpg'
import wiener from '../assets/img/logos/wiener.jpg'
import radiometer from '../assets/img/logos/RADIOMETER.png'
import metrolab from '../assets/img/logos/METROLAB.png'
import opti from '../assets/img/logos/opti.jpg'


const Body = Styled.div`
	align-items: center;
	background: black;
	display: flex;
	justify-content: center;
	height: 17vh;
    position:absolute;
    width:100%;
    top:75%;
	
@media screen and (max-height: 500px) {
	height: auto;	
	top:100vh;
}
	
@media screen and (max-width: 500px) {
	height: 16vh;	
	top:5vh;
}

@media screen and (max-height: 300px) {
    top:100vh;
}

// Animation
@keyframes scroll {
	0% { transform: translateX(3000px); }
	100% { transform: translateX(-1800px)}
}


	
 /* el contenedor de la cinta */
.slider {
	background: white;
	box-shadow: 20px 10px 20px -5px rgba(0, 0, 0, .125);
	height: 100%;
	margin-top: 0vh;
	overflow:hidden;
	position: relative;
	width: 100%;
	
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
	.slide-track {
		animation: scroll 100s linear infinite;
		display: flex;
		width:100px;
        height: 200px;
        align-items: flex-start;
        justify-content:center;

	}

	
	/* Cada imagen */

	.slide {
		height: 90px;
		width: auto;
        padding-top:-20px;
		margin-left:4vw;
        align-items:flex-start;
        background:transparent;
	}

    img{
        height: auto;
        width: auto;
        max-height: 100px;
        min-width:150px;
        alt: '';
    }
}
`

const imagenes = [wiener, mindray, metrolab, deltalab, mindray2, diestro, radiometer, labix, opti, deltalab, diestro, mindray, radiometer, wiener, labix, metrolab, opti, deltalab, labix, diestro, mindray, radiometer, wiener, metrolab, opti]

const listImagenes = imagenes.map((img) => <div className="slide"><img src={img} /></div>)

const ScrollMarcas = () => {
 
    return(
        <Body >
           <div class="slider">
	            <div class="slide-track">
                    {listImagenes}
            	</div>				
            </div>
		</Body>		
    )}


export default ScrollMarcas