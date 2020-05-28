import React from 'react'
import {ServiciosWrapper, Card} from '../assets/css/StyledServicios'
import FadeIn from './FadeIn'


const Servicios = () => {
    return(
        <>
          <ServiciosWrapper>
            <FadeIn>
                <Card>
                    <i class="fas fa-tools"></i>
                    <p>Servicio técnico oficial</p>
                    <p>Mantenimientos preventivos</p>
                    <br />
                    <p>Instalación de laboratorios</p>
                
                </Card>
            </FadeIn>
            <FadeIn>
                <Card>
                    <i class="fas fa-microscope"></i>
                    <p>Venta y alquiler <br /> 
                    de equipamiento para laboratorios</p>
                    <br />
                    <p>Provedores de equipamiento <br />
                    clinico de humanos y veterinario</p>
                </Card>
            </FadeIn>
            <FadeIn>
                <Card>
                    <i class="fas fa-vial"></i>
                    Reactivos - Descartables <br />
                    Consumibles para todas las marcas
                </Card>
            </FadeIn>
        </ServiciosWrapper>
        </>
    )
}

export default Servicios