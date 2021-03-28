import React from 'react';
import classes from "./SideDrawer.module.sass"

import { showNavigationItems } from "../utilities"
import { connect } from 'react-redux';


const SideDrawer = (props) => {

    const isOpen = props.isOpen
    const positionClass = isOpen ? classes.Open : classes.Closed




    return <div className={[classes.SideDrawer, positionClass].join(" ")}>
        <ul>
            {showNavigationItems(props.nav, props.click)}
        </ul>

    </div>
}
const mapStateToProps = state => {
    return {
        nav: state.nav.nav
    }
}

export default connect(mapStateToProps)(SideDrawer)