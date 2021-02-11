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
                        <Link to="/loggedFrontpage"><p className="lead gamepage-header"><img className="arrow-back" src={Back}/> Tagasi</p></Link>
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
                                    <img src={Fish1} alt="orav"/>
                                    <div className="overlay">
                                        <h4>Memory mäng</h4>
                                        <p>Ava kaardid ning leia õiged paarid.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                    <img src={Fish2} alt="karu"/>
                                    <div className="overlay">
                                        <h4>Loomahääled</h4>
                                        <p>Kuula loomahääli ning arva, millise loomaga on tegu.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                    <img src={Fish3} alt="konn"/>
                                    <div className="overlay">
                                        <h4>Test</h4>
                                        <p>Vali õige vastus.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}