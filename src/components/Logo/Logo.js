import React from 'react';
import BurgerLogo from '../../assests/images/Burger-logo.png'
import styles from './Logo.module.css'
const logo = (props) => {
    return (
        <div className={styles.Logo}>
            <img src={BurgerLogo} alt="My Burger"></img>

        </div>
    )
}

export default logo