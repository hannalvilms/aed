import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Butterfly from "../../images/butterfly.jpg";
import Deer from "../../images/deer.jpg";
import Rabbits from "../../images/rabbits.jpg";
import Horse from "../../images/horse.jpg";
import Back from "../../images/back.svg";
import {initial} from "../Games/DND/Answer";

export default class MaismaaloomadContent extends Component {
    render() {
        return (
            <div id="gamepage">
                <div className="jumbotron jumbotron-fluid squirrel">
                    <div className="container">
                        <Link to="/avaleht-logitud"><p className="lead gamepage-header"><img className="arrow-back" alt="arrow-back" src={Back}/> Tagasi</p></Link>
                        <h1 className="display-4">Maismaaloomad</h1>
                    </div>
                </div>
                <div className="container-fluid content">
                    <div className="container content-width">
                        <div className="row">
                            <div className="col-lg-12">
                                <h3>Mängud</h3>
                            </div>
                            <div className="row teemad">
                                <div className="col-lg-4 col-md-6 col-sm-10 col-xs-12" onClick={initial}>
                                    <img src={Rabbits} alt="jänesed"/>
                                    <Link to="/maismaaloomad-lohistamine">
                                        <div className="overlay lohistamine-yks">
                                            <h4>Lohistamine 1</h4>
                                            <p>Lohista looma nimi õige pildi peale.</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-10 col-xs-12" onClick={initial}>
                                    <img src={Horse} alt="jänesed"/>
                                    <Link to="/maismaaloomad-lohistamine-kaks">
                                        <div className="overlay lohistamine-kaks">
                                            <h4>Lohistamine 2</h4>
                                            <p>Lohista looma nimi õige pildi peale.</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-10 col-xs-12">
                                    <img src={Deer} alt="metskits"/>
                                    <Link to="/maismaaloomad-arva-pilt">
                                        <div className="overlay piltide-arvamine">
                                            <h4>Piltide arvamine</h4>
                                            <p>Arva, kes on pildil.</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-10 col-xs-12">
                                    <img src={Butterfly} alt="liblikas"/>
                                    <Link to="/maismaaloomad-memory">
                                        <div className="overlay memory-game">
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
