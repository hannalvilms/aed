import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Squirrel from "../../images/squirrel.jpg";
import Bear from "../../images/bear.jpg";
import Hedgehog from "../../images/hedgehog.jpg";
import Back from "../../images/back.svg";

export default class ToitumineContent extends Component {
    render() {
        return (
            <div id="gamepage">
                <div className="jumbotron jumbotron-fluid hedgehog">
                    <div className="container">
                        <Link to="/loggedFrontpage"><p className="lead gamepage-header"><img className="arrow-back" src={Back}/> Tagasi</p></Link>
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
                                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                    <img src={Bear} alt="orav"/>
                                    <div className="overlay">
                                        <h4>Memory mäng</h4>
                                        <p>Ava kaardid ning leia õiged paarid.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                    <img src={Hedgehog} alt="karu"/>
                                    <div className="overlay">
                                        <h4>Loomahääled</h4>
                                        <p>Kuula loomahääli ning arva, millise loomaga on tegu.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                    <img src={Squirrel} alt="konn"/>
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