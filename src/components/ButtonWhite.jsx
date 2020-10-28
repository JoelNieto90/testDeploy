import React from 'react';
import '../styles/componentsStyles/ButtonWhite.scss';


const ButtonWhite = ({text, onClick, className}) => {
  
  return (
    <button 
      className={className}
      onClick={onClick}
    >{text}</button>
  )
}

export default ButtonWhite;