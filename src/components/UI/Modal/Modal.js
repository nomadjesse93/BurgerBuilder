import React from 'react';
import styles from './Modal.module.css'
import Aux from '../../../hoc/Auxilliary'
import Backdrop from '../Backdrop/Backdrop'


const modal = (props) => {
    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.modalClosed} />
            <div
                className={styles.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100)',
                    opacity: props.show ? '1' : '0'
                }}
            >
                {props.children}
            </div>
        </Aux>

    )
}

export default modal;