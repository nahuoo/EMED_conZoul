import React from 'react'
import {ServiciosWrapper, Card} from '../assets/css/StyledServicios'

const Servicios = () => {
    return(
        <ServiciosWrapper>
            <Card>
                <i class="fas fa-tools"></i>
                <p>Servicio técnico oficial</p>
                <p>Mantenimientos preventivos</p>
                <br />
                <p>Instalación de laboratorios</p>
            
            </Card>
            <Card>
                <i class="fas fa-microscope"></i>
                <p>Venta y alquiler <br /> 
                de equipamiento para laboratorios</p>
                <br />
                <p>Provedores de equipamiento <br />
                 clinico de humanos y veterinario</p>
            </Card>
            <Card>
                <i class="fas fa-vial"></i>
                Reactivos - Descartables <br />
                 Consumibles para todas las marcas
            </Card>
        </ServiciosWrapper>
    )
}

export default Servicios