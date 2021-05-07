import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Mobilenav extends Component {

    logoutUser = () => {
        let appState = {
            isLoggedIn: false,
            user: {}
        };
        // save app state with user date in local storage
        localStorage["appState"] = JSON.stringify(appState);
        this.setState({
            isLoggedIn: appState.isLoggedIn,
            user: appState.user
        });
    };

    render() {
        return (
            <div className = "main-nav" id = "main-nav">
                <Link to="/avaleht-logitud" className = "nav-link">Materjalid</Link>
                <Link to="/tulemused" className="nav-link">Konto</Link>
                <Link to="/avaleht" onClick={this.logoutUser} className="nav-link">Logi välja</Link>
            </div>
        )
    }
}