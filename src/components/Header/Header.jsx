import React from 'react';
import header from './Header.module.css';

const Header = () => {
    return (
        <header className={header.header}>
        <div className={header.img_wrapper}>
          <img className="img" src={"./logo.png"} alt="Mario" />
        </div>
      </header>
    )
}
export default Header;