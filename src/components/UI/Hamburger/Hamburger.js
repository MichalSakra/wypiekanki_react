import React from 'react';
import classes from './Hamburger.module.sass';


const Hamburger = (props) => {


    const position = props.isSideDrawerOpen ? classes.Close : classes.Open




    return (
        <div className={classes.Hamburger__wrapper}>
            <div onClick={props.click} className={[classes.Hamburger, position].join(" ")}>
                <span></span>
                <span></span>
                <span></span>

            </div>
        </div>
    )
}

export default Hamburger