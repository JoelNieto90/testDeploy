import React, { Fragment } from 'react';
import '../styles/componentsStyles/Input.scss';

const Input = ({InputName, type, placeholder, name}) => {
    return (
        <Fragment>
            <h4>{InputName}</h4>
            <input type={type} placeholder={placeholder} name={name} className='input' />
        </Fragment>
    );
}
 
export default Input;