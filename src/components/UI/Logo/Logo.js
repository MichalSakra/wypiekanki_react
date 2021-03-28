import React from 'react';
import logo from "../../../assets/images/logo.png"
import classes from "./Logo.module.sass"
const Logo = () => {

    return <img className={classes.Logo} src={logo} alt="Wypiekanki" />
}

export default Logo