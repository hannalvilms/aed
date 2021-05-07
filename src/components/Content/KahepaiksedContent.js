import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Snake from "../../images/snake.jpg";
import Geko from "../../images/geko.jpg";
import Frog from "../../images/frog2.jpg";
import Back from "../../images/back.svg";

export default class KahepaiksedContent extends Component {
    render() {
        return (
            <div id="gamepage">
                <div className="jumbotron jumbotron-fluid frog">
                    <div className="container">
                        <Link to="/avaleht-logitud"><p className="lead gamepage-header"><img className="arrow-back" alt="arrow-back" src={Back}/> Tagasi</p></Link>
                        <h1 className="display-4">Maod, sisalikud ja kahepaiksed</h1>
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
                                    <img src={Snake} alt="madu"/>
                                    <Link to="/kahepaiksed-arva-pilt">
                                        <div className="overlay">
                                            <h4>Piltide arvamine</h4>
                                            <p>Arva, kes on pildil.</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                    <img src={Geko} alt="geko"/>
                                    <Link to="/maod-sisalikud-test">
                                        <div className="overlay">
                                            <h4>Test (Maod ja sisalikud)</h4>
                                            <p>Vali õige vastus.</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                    <img src={Frog} alt="konn"/>
                                    <Link to="/kahepaiksed-test">
                                        <div className="overlay">
                                            <h4>Test (Kahepaiksed)</h4>
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
