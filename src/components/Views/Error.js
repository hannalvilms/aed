import React, { Component } from 'react';
import logo from '../../images/logo.png';
import Error from '../../images/error.png';
import Back from '../../images/back.svg';

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
                        <img class="error-img" src={Error} alt="error"/>
                        <h2>Lehte ei leitud!</h2>
                        <h3 className="error-back"><img class="error-arrow" src={Back} /> Tagasi</h3>
                    </div>
                </div>
            </div>
        )
    }
}