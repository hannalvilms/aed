import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Whale from "../../images/whale.jpg";
import Dolphin from "../../images/dolphin.jpg";
import Seal from "../../images/seal.jpg";
import Back from "../../images/back.svg";
import {initial} from "../Games/DND/Answer";

export default class VeeloomadContent extends Component {
    render() {
        return (
            <div id="gamepage">
                <div className="jumbotron jumbotron-fluid seal">
                    <div className="container">
                        <Link to="/loggedFrontpage"><p className="lead gamepage-header"><img className="arrow-back" alt="arrow-back" src={Back}/> Tagasi</p></Link>
                        <h1 className="display-4">Veeloomad</h1>
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
                                    <img src={Whale} alt="vaal"/>
                                    <Link to="/veeloomadDND">
                                        <div className="overlay">
                                            <h4>Lohistamine</h4>
                                            <p>Lohista looma nimi õige pildi peale.</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                    <img src={Dolphin} alt="delfiin"/>
                                    <Link to="/veeloomadGuessPicture">
                                        <div className="overlay">
                                            <h4>Piltide arvamine</h4>
                                            <p>Arva, kes on pildil.</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                    <img src={Seal} alt="hüljes"/>
                                    <Link to="/veeloomadQuiz">
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
