import React from 'react'

import logoAnimation from '../Assets/logoAnimation.svg'
import '../styles/componentsStyles/LogoAnimate.scss'


const LogoAnimado = () => {
    return(
        <div className='animationContainer'>
            <img src={logoAnimation} alt='Logo' />
        </div>
    )
}

export default LogoAnimado;