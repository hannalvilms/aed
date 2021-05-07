import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Fish1 from "../../images/fish2.jpg";
import Fish2 from "../../images/fish3.jpg";
import Fish3 from "../../images/fish4.jpg";
import Back from "../../images/back.svg";

export default class KaladContent extends Component {
    render() {
        return (
            <div id="gamepage">
                <div className="jumbotron jumbotron-fluid fish">
                    <div className="container">
                        <Link to="/avaleht-logitud"><p className="lead gamepage-header"><img className="arrow-back" alt="arrow-back" src={Back}/> Tagasi</p></Link>
                        <h1 className="display-4">Kalad</h1>
                    </div>
                </div>
                <div className="container-fluid content">
                    <div className="container content-width">
                        <div className="row">
                            <div className="col-lg-12">
                                <h3>Mängud</h3>
                            </div>
                            <div className="row teemad">
                                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                    <img src={Fish1} alt="kala"/>
                                    <Link to="/kalad-arva-pilt">
                                        <div className="overlay">
                                            <h4>Piltide arvamine</h4>
                                            <p>Arva, kes on pildil.</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                    <img src={Fish2} alt="kala"/>
                                    <Link to="/kalad-memory">
                                        <div className="overlay">
                                            <h4>Memory</h4>
                                            <p>Leia õiged paarid.</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                    <img src={Fish3} alt="kala"/>
                                    <Link to="/kalad-test">
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
