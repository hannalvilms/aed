import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Mobilenav extends Component {
    render() {
        return (
            <div className = "main-nav" id = "main-nav">
                <Link to="/login" className = "nav-link" href =""> Logi sisse</Link>
                <Link to="/register" className="nav-link" href="">Loo konto</Link>
            </div>
        )
    }
}