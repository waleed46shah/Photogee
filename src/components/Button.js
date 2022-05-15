import React from 'react'
import './Button.css'
import {Link} from 'react-router-dom'


const STYLES = ['btn--primary','btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];
//generic button component will be used throughout the project
export const Button = ({  // properties of the button
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return(
        <Link to='/sign-up' className='btn--mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} children={children} onClick={onClick} type={type}></button>
        </Link>
    )
};
//{children refers to whatever you put inside of a button, it is going to be rendered as component}