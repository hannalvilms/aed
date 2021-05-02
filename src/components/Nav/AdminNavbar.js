import React, { Component } from 'react';
import logo from '../../images/logo.png';

export default class AdminNavbar extends Component {
    render() {
        return (
            <div className="container-fluid mobile-nav">
                <div className="container">
                    <nav className="row navbar navbar-expand-lg navbar-light">
                        <div  className="navbar-header header-logo">
                            <img src={logo} alt="logo"/>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}
