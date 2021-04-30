import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Lynx from "../../images/lynx.jpg";
import Moose from "../../images/moose.jpg";
import Hunt from "../../components/Games/img/hunt.jpg";
import Back from "../../images/back.svg";
import {initial} from "../Games/DND/Answer";

export default class MetsloomadContent extends Component {
    render() {
        return (
            <div id="gamepage">
                <div className="jumbotron jumbotron-fluid bear">
                    <div className="container">
                        <Link to="/loggedFrontpage"><p className="lead gamepage-header"><img className="arrow-back" alt="arrow-back" src={Back}/> Tagasi</p></Link>
                        <h1 className="display-4">Metsloomad</h1>
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
                                    <img src={Moose} alt="põder"/>
                                    <Link to="/metsloomadDND">
                                        <div className="overlay">
                                            <h4>Lohistamine</h4>
                                            <p>Lohista looma nimi õige pildi peale.</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                    <img src={Lynx} alt="ilves"/>
                                    <Link to="/metsloomadGuessPicture">
                                        <div className="overlay">
                                            <h4>Piltide arvamine</h4>
                                            <p>Arva, kes on pildil.</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                    <img src={Hunt} alt="hunt"/>
                                    <Link to="/metsloomadMemory">
                                        <div className="overlay">
                                            <h4>Memory</h4>
                                            <p>Leia õiged paarid.</p>
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
