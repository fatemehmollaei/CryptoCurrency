import React from 'react'
import classes from './Link.module.css'
import {NavLink} from 'react-router-dom'

const Link = (props) => (
    <li className={classes.NavigationItem}>
        <NavLink to={props.link} exact={props.exact} activeClassName={classes.active}>{props.children}</NavLink>
    </li>
)

export default Link;