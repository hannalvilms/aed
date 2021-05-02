import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

export default class AdminNavbar extends Component {
    render() {
        return (
            <div className="container-fluid mobile-nav">
                <div className="container">
                    <nav className="row navbar navbar-expand-lg navbar-light">
                        <div  className="navbar-header header-logo">
                            <Link to="/frontpage"> <img src={logo} alt="logo"/></Link>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}
