import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import logo from '../../images/logo.png';
import AdminMobileNav from "./AdminMobileNav";

export default class AdminNav extends Component {

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
            <div className="container-fluid mobile-nav">
                <div className="container">
                    <nav className="row navbar navbar-expand-lg navbar-light">
                        <div className="navbar-header header-logo">
                            <img src={logo} alt="logo"/>
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
                                <Link to="/adminusers" className="nav-link btn btn-primary btn-xs">Konto</Link>
                                <Link to="/adminlogin" onClick={this.logoutUser} className="nav-link btn btn-primary btn-xs">Logi välja</Link>
                            </div>
                        </div>
                    </nav>
                </div>
                <AdminMobileNav />
            </div>
        )
    }
}
