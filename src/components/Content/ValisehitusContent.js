import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Dog from "../../images/dog2.jpg";
import Dragonfly from "../../images/dragonfly.jpg";
import Back from "../../images/back.svg";

export default class ValisehitusContent extends Component {
    render() {
        return (
            <div id="gamepage">
                <div className="jumbotron jumbotron-fluid fox">
                    <div className="container">
                        <Link to="/avaleht-logitud"><p className="lead gamepage-header"><img className="arrow-back" alt="arrow-back" src={Back}/> Tagasi</p></Link>
                        <h1 className="display-4">Loomade välisehitus</h1>
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
                                    <img src={Dog} alt="koer"/>
                                    <Link to="/valisehitus-arva-pilt">
                                        <div className="overlay piltide-arvamine">
                                            <h4>Piltide arvamine</h4>
                                            <p>Arva, kes on pildil.</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                   <img src={Dragonfly} alt="kiil"/>
                                    <Link to="/valisehitus-test">
                                        <div className="overlay test">
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
