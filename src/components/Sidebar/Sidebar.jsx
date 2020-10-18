import React from 'react';
import sidebar from './Sidebar.module.css'
import { faUserCircle, faCommentAlt, faPlayCircle, faSun, faNewspaper, faAddressBook } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <section className={sidebar.sidebar}>
      <ul className={sidebar.nav_menu}>
        <li className={sidebar.nav_menu_item}>
          <NavLink className={sidebar.nav_menu_link} to='/profile' activeClassName={sidebar.active}>
          <span><FontAwesomeIcon icon={faUserCircle} />     </span>Profile</NavLink>
          </li>
        <li className={sidebar.nav_menu_item}>
          <NavLink className={sidebar.nav_menu_link} to='/dialogs' activeClassName={sidebar.active}>
          <span><FontAwesomeIcon icon={faCommentAlt} />     </span>Messages</NavLink>
          </li>
        <li className={sidebar.nav_menu_item}>
          <NavLink className={sidebar.nav_menu_link} to='/news' activeClassName={sidebar.active}>
          <span><FontAwesomeIcon icon={faNewspaper} />     </span>News</NavLink>
          </li>
        <li className={sidebar.nav_menu_item}>
          <NavLink className={sidebar.nav_menu_link} to='/friends' activeClassName={sidebar.active}>
          <span><FontAwesomeIcon icon={faAddressBook} />     </span>Friends</NavLink>
          </li>
        <li className={sidebar.nav_menu_item}>
          <NavLink className={sidebar.nav_menu_link} to='/users' activeClassName={sidebar.active}>
            <span><FontAwesomeIcon icon={faAddressBook} />     </span>Users</NavLink>
        </li>
        <li className={sidebar.nav_menu_item}>
          <NavLink className={sidebar.nav_menu_link} to='/music' activeClassName={sidebar.active}>
          <span><FontAwesomeIcon icon={faPlayCircle} />     </span>Music</NavLink>
          </li>
        <li className={sidebar.nav_menu_item}>
          <NavLink className={sidebar.nav_menu_link} to='/settings' activeClassName={sidebar.active}>
          <span><FontAwesomeIcon icon={faSun} />     </span>Settings</NavLink>
          </li>
      </ul>
    </section>
  )
}
export default Sidebar;