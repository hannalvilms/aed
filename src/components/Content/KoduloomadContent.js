import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cow from "../../images/cow.jpg";
import Lambs from "../../images/lambs.jpg";
import Horses from "../../images/horse.jpg";
import Rabbits from "../../images/rabbits.jpg";
import Back from "../../images/back.svg";
import {initial} from "../Games/DND/Answer";

export default class KoduloomadContent extends Component {
    render() {
        return (
            <div id="gamepage">
                <div className="jumbotron jumbotron-fluid dog">
                    <div className="container">
                        <Link to="/loggedFrontpage"><p className="lead gamepage-header"><img className="arrow-back" alt="arrow-back" src={Back}/> Tagasi</p></Link>
                        <h1 className="display-4">Koduloomad</h1>
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
                                    <img src={Cow} alt="lehm"/>
                                    <Link to="/koduloomadDND">
                                        <div className="overlay">
                                            <h4>Lohistamine</h4>
                                            <p>Lohista looma nimi õige pildi peale.</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                    <img src={Lambs} alt="lambad"/>
                                    <Link to="/koduloomadGuessPicture">
                                        <div className="overlay">
                                            <h4>Piltide arvamine</h4>
                                            <p>Arva, kes on pildil.</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                    <img src={Horses} alt="konn"/>
                                    <Link to="/koduloomadHangman">
                                        <div className="overlay">
                                            <h4>Poomine</h4>
                                            <p>Arva ära sõna.</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                    <img src={Rabbits} alt="jänesed"/>
                                    <Link to="/koduloomadMemory">
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
