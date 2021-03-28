
import React from 'react';
import classes from './Navigation.module.sass';
import Navbar from "./Navbar/Navbar"

import SideDrawer from "./SideDrawer/SideDrawer"
import Backdrop from '../UI/Backdrop/Backdrop';



class Navigation extends React.Component {
    state = {
        isSideDrawerOpen: false
    }
    sideDrawerHandler = () => {
        this.setState(prev => {
            return {
                isSideDrawerOpen: !prev.isSideDrawerOpen
            }
        })
    }
    render() {
        return (
            <nav className={classes.Navigation}>

                <Navbar click={this.sideDrawerHandler} isSideDrawerOpen={this.state.isSideDrawerOpen} />

                <SideDrawer click={this.sideDrawerHandler} isOpen={this.state.isSideDrawerOpen} />
                <Backdrop isOpen={this.state.isSideDrawerOpen} click={this.sideDrawerHandler} />

            </nav>
        )
    }
}

export default Navigation