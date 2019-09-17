import React from 'react';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import styles from './SideDrawer.module.css';
import BackDrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxilliary'

const sideDrawer = (props) => {
    let attachedClasses = [styles.SideDrawer, styles.Close]

    if (props.open) {
        attachedClasses = [styles.SideDrawer, styles.Open]
    }

    return (
        <Aux>
            <BackDrop show={props.open} clicked={props.closed} />
            <div className={props.menu ? styles.FullScreen : attachedClasses.join(' ')}>
                <div className={styles.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavItems />
                </nav>
            </div>
        </Aux>

    );
}

export default sideDrawer;