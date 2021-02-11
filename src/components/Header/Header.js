import React, { Component } from 'react';
import Headerimg from '../../images/header-img.png';

export default class Header extends Component {

    render() {
        return (
            <div className="container-fluid header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-5 col-sm-12 header-text">
                            <h1>Loodusõpetuse õppemängud 2.klassile.</h1>
                            <p>Mängimiseks loo konto või logi sisse.</p>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-12">
                            <img src={Headerimg} className="header-img" alt="Jänes ja rebane"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}