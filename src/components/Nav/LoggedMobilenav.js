import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Mobilenav extends Component {
    render() {
        return (
            <div className = "main-nav" id = "main-nav">
                <Link to="/loggedFrontpage" className = "nav-link">Materjalid</Link>
                <Link to="/profile" className="nav-link">Konto</Link>
                <Link to="/frontpage" className="nav-link">Logi välja</Link>
            </div>
        )
    }
}