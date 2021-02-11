import React, { Component } from 'react';
import logo from '../../images/logo.png';
import Maintenance from '../../images/maintenance.png';

export default class Navbar extends Component {
    render() {
        return (
            <div className="container-fluid mobile-nav">
                <div className="container">
                    <nav className="row navbar navbar-expand-lg navbar-light">

                        <div className="navbar-header header-logo">
                            <img src={logo} alt="logo"/>
                        </div>

                    </nav>

                    <div className="error">
                        <img className="error-img" src={Maintenance} alt="error"/>
                        <h2>Lehel toimuvad hooldustööd.</h2>
                    </div>
                </div>
            </div>
        )
    }
}