import classes from './Header.module.sass';
import React from 'react';
import Banner from "../../components/Banner/Banner"
const Header = () => {


    return (
        <div>

            <div className={classes.Background}>
                <Banner />
            </div>
        </div>
    )
}

export default Header