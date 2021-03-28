import React from 'react';
import { NavLink } from 'react-router-dom'
import classes from './NavItem.module.sass';

const NavItem = ({ data, click }) => {


    return (
        <li onClick={click} className={classes.NavItem}>
            <NavLink exact to={data.href}>
                {data.name}
            </NavLink>
        </li>
    )
}

export default NavItem