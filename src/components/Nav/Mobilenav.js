import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Mobilenav extends Component {
    render() {
        return (
            <div className = "main-nav" id = "main-nav">
                <Link to="/login" className = "nav-link"> Logi sisse</Link>
                <Link to="/registreeri" className="nav-link">Loo konto</Link>
            </div>
        )
    }
}