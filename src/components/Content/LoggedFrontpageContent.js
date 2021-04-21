import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Squirrel from '../../images/squirrel.jpg';
import Bear from '../../images/bear.jpg';
import Frog from '../../images/frog.jpg';
import Bird from '../../images/bird.jpg';
import Fish from '../../images/fish.jpg';
import Seal from '../../images/seal.jpg';
import Dog from '../../images/dog.jpg';
import Fox from '../../images/fox.jpg';
import Hedgehog from '../../images/hedgehog.jpg';

export default class FrontpageContent extends Component {
    componentDidMount() {
        document.body.style.backgroundColor = "white"
    }
    render() {
        return (
            <div className="container-fluid content">
                <div className="container content-width">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Teemad</h3>
                        </div>
                        <div className="row teemad">
                            <div className="col-lg-4 col-md-6 col-sm-10 col-xs-12">
                                <img src={Squirrel} alt="orav"/>
                                <Link to="/maismaaloomad">
                                    <div className="overlay">
                                        <h4>Maismaaloomad</h4>
                                        <p>Mängud: piltide arvamine, nime lohistamine pildile, memory.</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-10 col-xs-12">
                                <img src={Bear} alt="karu"/>
                                <Link to="/metsloomad">
                                    <div className="overlay">
                                        <h4>Metsloomad</h4>
                                        <p>Mängud: nime lohistamine pildile, piltide arvamine, memory.</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-10 col-xs-12">
                                <img src={Frog} alt="konn"/>
                                <Link to="/kahepaiksed">
                                    <div className="overlay">
                                        <h4>Maod, sisalikud ja kahepaiksed</h4>
                                        <p>Mängud: piltide arvamine, test.</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-10 col-xs-12">
                                <img src={Bird} alt="lind"/>
                                <Link to="/linnud">
                                    <div className="overlay">
                                        <h4>Linnud</h4>
                                        <p>Mängud: piltide arvamine, heli arvamine, poomine, memory.</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-10 col-xs-12">
                                <img src={Fish} alt="kala"/>
                                <Link to="/kalad">
                                    <div className="overlay">
                                        <h4>Kalad</h4>
                                        <p>Mängud: piltide arvamine, memory, test.</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-10 col-xs-12">
                                <img src={Seal} alt="hüljes"/>
                                <Link to="/veeloomad">
                                    <div className="overlay">
                                        <h4>Veeloomad</h4>
                                        <p>Mängud: nime lohistamine pildile, piltide arvamine, test.</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-10 col-xs-12">
                                <img src={Dog} alt="koer"/>
                                <Link to="/koduloomad">
                                    <div className="overlay">
                                        <h4>Koduloomad</h4>
                                        <p>Mängud: nime lohistamine pildile, piltide arvamine, poomine, memory.</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-10 col-xs-12">
                                <img src={Fox} alt="rebane"/>
                                <Link to="/valisehitus">
                                    <div className="overlay">
                                        <h4>Loomade välisehitus</h4>
                                        <p>Mängud: piltide arvamine, test.</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-10 col-xs-12">
                                <img src={Hedgehog} alt="siil"/>
                                <Link to="/toitumine">
                                    <div className="overlay">
                                        <h4>Loomade toitumine ja kasvamine</h4>
                                        <p>Mängud: nime lohistamine pildile, poomine, test.</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}