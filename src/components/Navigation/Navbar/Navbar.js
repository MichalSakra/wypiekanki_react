import React from 'react';
import { showNavigationItems } from "../utilities"

import Hamburger from "../../UI/Hamburger/Hamburger"
import classes from "./Navbar.module.sass"
import { connect } from 'react-redux';
const Navbar = props => {

    return (
        <div className={classes.Navbar}>

            <ul >

                {showNavigationItems(props.navList)}
            </ul>
            <Hamburger click={props.click} isSideDrawerOpen={props.isSideDrawerOpen} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        navList: state.nav.nav
    }
}

export default connect(mapStateToProps)(Navbar)