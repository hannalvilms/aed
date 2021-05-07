import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FooterLogo from '../../images/logo-hele1.png';

export default class LoggedFooter extends Component {
    render() {
        return (
            <div className="container-fluid footer mt-auto">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 footer-img">
                            <img src={FooterLogo} alt="footer-logo"/>
                        </div>
                        <div className="footer-links col-lg-10 col-md-10 col-sm-12 col-xs-12 my-auto ">
                            <Link to="/privaatsuspoliitika-logitud">Privaatsuspoliitika</Link>
                            <Link to="/tingimused-logitud">Kasutustingimused</Link>
                            <Link to="/kontakt-logitud">Kontakt</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
