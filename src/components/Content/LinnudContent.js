import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Bird1 from "../../images/bird5.jpg";
import Bird2 from "../../images/bird3.jpg";
import Bird3 from "../../images/bird2.jpg";
import Bird4 from "../../components/Games/img/toonekurg.jpg";
import Back from "../../images/back.svg";

export default class LinnudContent extends Component {
    render() {
        return (
            <div id="gamepage">
                <div className="jumbotron jumbotron-fluid bird">
                    <div className="container">
                        <Link to="/loggedFrontpage"><p className="lead gamepage-header"><img className="arrow-back" alt="arrow-back" src={Back}/> Tagasi</p></Link>
                        <h1 className="display-4">Linnud</h1>
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
                                    <img src={Bird1} alt="rasvathinae"/>
                                    <Link to="/linnudMemory">
                                        <div className="overlay">
                                            <h4>Memory</h4>
                                            <p>Leia õiged paarid.</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                    <img src={Bird2} alt="lõoke"/>
                                    <Link to="/guessSound">
                                        <div className="overlay">
                                            <h4>Heli arvamine</h4>
                                            <p>Kuula heli ning arva, kellele see kuulub.</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                    <img src={Bird3} alt="rähn"/>
                                    <Link to="/linnudGuessPicture">
                                        <div className="overlay">
                                            <h4>Piltide arvamine</h4>
                                            <p>Arva, kes on pildil.</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                    <img src={Bird4} alt="toonekurg"/>
                                    <Link to="/linnudHangman">
                                        <div className="overlay">
                                            <h4>Poomine</h4>
                                            <p>Arva ära sõna.</p>
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
