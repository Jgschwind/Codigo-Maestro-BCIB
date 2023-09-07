import React, { useState } from 'react';

export default function AboutUs (){
    <div>
        <Img />
        <Text />
    </div>
}

function Img({img, logo}){
    logo = "../images/about-us/nosotros.jpg"
    return(
        <img src={img} alt="img"/>
    )
}

function Text(){
    return(
        <p>
            Nos distinguimos por orientar nuestra vocación hacia el cliente. Por ello, en los últimos
        años,
        hemos
        trabajado en: la construcción de nuevos centros de atención; la implementación de tecnología de avanzada; la
        capacitación constante de nuestro personal; y la innovación continua en la variedad de productos y
        servicios.
        Así llegamos a cubrir en la actualidad todas las áreas de negocios y segmentos del mercado: personas,
        empresas,
        pymes, emprendedores, y lideramos la posición en Planes Sueldo del sistema financiero.

        Estas características sumadas a una atención personalizada nos permiten dar respuestas efectivas a las
        necesidades de nuestros clientes, garantizándoles: calidad, discreción, solvencia, transparencia y un acceso
        rápido y eficaz a toda la Información requerida. Porque nuestra misión es ser un banco universal, cercano a
        sus
        clientes, con presencia nacional y vocación de crecimiento, en constante búsqueda de creación de valor para
        sus
        accionistas, colaboradores y la sociedad en su conjunto.
      </p>
    )
}
