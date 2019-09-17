import React from 'react';
import Aux from '../../../hoc/Auxilliary'
import styles from './MenuButton.module.css'

const menuButton = (props) => {
    return (
        <Aux >
            <button onClick={props.openDrawer} className={styles.MenuButton}  >Menu</button>
        </Aux >
    )
}

export default menuButton;