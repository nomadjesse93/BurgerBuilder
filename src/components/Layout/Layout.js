import React from 'react';
import styles from './Layout.module.css'
import Aux from '../../hoc/Auxilliary';

const layout = (props) => {
    return (
        <Aux>
            <div>Toolbar, SideDrawer, Backdrop</div>
            <main className={styles.Content}>
                {props.children}
            </main>
        </Aux>
    )
};

export default layout;