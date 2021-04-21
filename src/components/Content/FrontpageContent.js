import React, { Component } from 'react';
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
                                <div className="overlay">
                                    <h4>Maismaaloomad</h4>
                                    <p>Mängud: piltide arvamine, nime lohistamine pildile, memory.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-10 col-xs-12">
                                <img src={Bear} alt="karu"/>
                                <div className="overlay">
                                    <h4>Metsloomad</h4>
                                    <p>Mängud: nime lohistamine pildile, piltide arvamine, memory.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-10 col-xs-12">
                                <img src={Frog} alt="konn"/>
                                <div className="overlay">
                                    <h4>Maod, sisalikud ja kahepaiksed</h4>
                                    <p>Mängud: piltide arvamine, test.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-10 col-xs-12">
                                <img src={Bird} alt="lind"/>
                                <div className="overlay">
                                    <h4>Linnud</h4>
                                    <p>Mängud: piltide arvamine, heli arvamine, poomine, memory.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-10 col-xs-12">
                                <img src={Fish} alt="kala"/>
                                <div className="overlay">
                                    <h4>Kalad</h4>
                                    <p>Mängud: piltide arvamine, memory, test.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-10 col-xs-12">
                                <img src={Seal} alt="hüljes"/>
                                <div className="overlay">
                                    <h4>Veeloomad</h4>
                                    <p>Mängud: nime lohistamine pildile, piltide arvamine, test.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-10 col-xs-12">
                                <img src={Dog} alt="koer"/>
                                <div className="overlay">
                                    <h4>Koduloomad</h4>
                                    <p>Mängud: nime lohistamine pildile, piltide arvamine, poomine, memory.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-10 col-xs-12">
                                <img src={Fox} alt="rebane"/>
                                <div className="overlay">
                                    <h4>Loomade välisehitus</h4>
                                    <p>Mängud: piltide arvamine, test.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-10 col-xs-12">
                                <img src={Hedgehog} alt="siil"/>
                                <div className="overlay">
                                    <h4>Loomade toitumine ja kasvamine</h4>
                                    <p>Mängud: nime lohistamine pildile, poomine, test.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}