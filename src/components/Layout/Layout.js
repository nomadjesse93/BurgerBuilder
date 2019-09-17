import React, { Component } from 'react';
import styles from './Layout.module.css'
import Aux from '../../hoc/Auxilliary';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

export default class Layout extends Component {

    state = {
        showSideDrawer: false,
        menuButtonClicked: false
    }

    sideDrawerClosedHandler = () => {
        if (this.state.showSideDrawer === true) {
            this.setState({
                showSideDrawer: false,
                menuButtonClicked: false
            })
        }

    }

    opensideDrawerHandler = () => {
        this.setState({
            showSideDrawer: true,
            menuButtonClicked: true
        })
    }
    render() {
        return (
            <Aux>
                <Toolbar openDrawer={this.opensideDrawerHandler} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}
                    menu={this.state.menuButtonClicked}
                />
                <div>SideDrawer</div>
                <main className={styles.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    };
}
