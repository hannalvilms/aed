import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Trees from "../../images/trees.jpg";
import One from "../../images/one-star.png";
import Two from "../../images/two-stars.png";
import Three from "../../images/three-stars.png";
//import Four from "../../images/four-stars.png";
import Five from "../../images/five-stars.png";
export default class ProfileContent extends Component {
    render() {
        return (
            <div className="container-fluid profile">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-12 profile-menu my-auto">
                            <p>Tulemused</p>
                            <Link to="/profileData">Andmed</Link>
                        </div>
                        <div className="row profile-results col-lg-8 col-sm-12">
                            {/*<div className="col-lg-12 my-auto text-right sort">
                                <button className="col-lg-4 col-md-4 col-sm-4 col-4 btn sort-results">Sorteeri kuupäeva järgi</button>
                            </div>*/}
                            <div className="col-lg-6 col-md-6 col-sm-10">
                                <img src={Trees} alt="trees"/>
                                <div className="overlay">
                                    <h4>Memory</h4>
                                    <h6>Maismaaloomad</h6>
                                    <h6>Score</h6>
                                    <img src={One} className="img-result" alt="score"/>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-10">
                                <img src={Trees} alt="trees"/>
                                <div className="overlay">
                                    <h4>Test</h4>
                                    <h6>Linnud</h6>
                                    <h6>Score</h6>
                                    <img src={Two} className="img-result" alt="score"/>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-10">
                                <img src={Trees} alt="trees"/>
                                <div className="overlay">
                                    <h4>Memory</h4>
                                    <h6>Maismaaloomad</h6>
                                    <h6>Score</h6>
                                    <img src={Five} className="img-result" alt="score"/>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-10">
                                <img src={Trees} alt="Trees"/>
                                <div className="overlay">
                                    <h4>Test</h4>
                                    <h6>Linnud</h6>
                                    <h6>Score</h6>
                                    <img src={Three} className="img-result" alt="score"/>
                                </div>
                            </div>
                            {/*<div className="col-lg-12 my-auto sort text-right">
                                <button className="col-lg-3 col-md-3 col-6 btn btn-danger contact-next">Järgmine</button>
                            </div>*/}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
