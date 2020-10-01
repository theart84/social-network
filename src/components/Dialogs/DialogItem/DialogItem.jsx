import React from 'react'
import dialogs from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`;
    return (
        <div className={dialogs.dialog}>
            <img  className={dialogs.avatar} src={props.avatar} alt='Avatar'/>
            <NavLink className={dialogs.dialog_link} to={path} activeClassName={dialogs.active}>{props.name}</NavLink>
        </div>
    )
}
export default DialogItem;