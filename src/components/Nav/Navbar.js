import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import $ from 'jquery';
import Mobilenav from "../Nav/Mobilenav";

export default class Navbar extends Component {
    componentDidMount() {
        const $hamburger = $(".hamburger");
        const $layout = $(".main-nav");
        const $mobilenav = $(".mobile-nav");
        $hamburger.on("click", function(e) {
            $hamburger.toggleClass("is-active");
            // Do something else, like open/close menu
            $layout.toggleClass("is-open");
            $mobilenav.toggleClass("fixed-nav");
        });
    }
    render() {
        return (
            <div className="container-fluid mobile-nav">
                <div className="container">
                    <nav className="row navbar navbar-expand-lg navbar-light">
                        <div  className="navbar-header header-logo">
                            <Link to="/frontpage"> <img src={logo} alt="logo"/></Link>
                        </div>
                        <button className="hamburger hamburger--collapse toggle-menu menu-right"  type="button">
                            <span className="hamburger-box">
                            <span className="hamburger-inner"/>
                            </span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            </ul>
                            <div className="nav navbar-right">
                                <Link to="/login" className="nav-link btn btn-primary btn-xs"> Logi sisse</Link>
                                <Link to="/register" className="nav-link btn btn-primary btn-xs"> Loo konto</Link>
                            </div>
                        </div>
                    </nav>
                </div>
                < Mobilenav/>
            </div>
        )
    }
}
