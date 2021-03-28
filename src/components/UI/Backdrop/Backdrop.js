import React from 'react';
import classes from './Backdrop.module.sass';


const Backdrop = (props) => {

    const isOpen = props.isOpen
    const showBackdrop = isOpen ? classes.Backdrop : null

    return <div onClick={props.click} className={showBackdrop}></div>
}

export default Backdrop
