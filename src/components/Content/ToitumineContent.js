import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Back from "../../images/back.svg";
import Kitsetall from "../../components/Games/img/kitsetall.jpg";
import Parditibu from "../../components/Games/img/parditibu.jpg";
import Rebasekutsikas from "../../components/Games/img/rebasekutsikas.jpg";
import {initial} from "../Games/DND/Answer";

export default class ToitumineContent extends Component {
    render() {
        return (
            <div id="gamepage">
                <div className="jumbotron jumbotron-fluid hedgehog">
                    <div className="container">
                        <Link to="/avaleht-logitud"><p className="lead gamepage-header"><img className="arrow-back" alt="arrow-back" src={Back}/> Tagasi</p></Link>
                        <h1 className="display-4">Loomade toitumine ja kasvamine</h1>
                    </div>
                </div>
                <div className="container-fluid content">
                    <div className="container content-width">
                        <div className="row">
                            <div className="col-lg-12">
                                <h3>Mängud</h3>
                            </div>
                            <div className="row teemad">
                                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12" onClick={initial}>
                                    <img src={Rebasekutsikas} alt="Rebasekutsikas"/>
                                    <Link to="/toitumine-lohistamine">
                                        <div className="overlay">
                                            <h4>Lohistamine</h4>
                                            <p>Lohista looma nimi õige pildi peale.</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                    <img src={Parditibu} alt="Parditibu"/>
                                    <Link to="/toitumine-poomine">
                                        <div className="overlay">
                                            <h4>Poomine</h4>
                                            <p>Arva ära sõna.</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                    <img src={Kitsetall} alt="Kitsetall"/>
                                    <Link to="/toitumine-test">
                                        <div className="overlay">
                                            <h4>Test</h4>
                                            <p>Vali õige vastus.</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
