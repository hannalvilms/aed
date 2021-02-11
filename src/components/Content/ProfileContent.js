import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Trees from "../../images/trees.jpg";
import Zero from "../../images/zero-stars.png"
import One from "../../images/one-star.png";
import Two from "../../images/two-stars.png";
import Three from "../../images/three-stars.png";
import Four from "../../images/four-stars.png";
import Five from "../../images/five-stars.png";
export default class ProfileContent extends Component {
    render() {
        return (
            <div className="container-fluid profile">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-12 profile-menu my-auto">
                            <a>Ajalugu</a>
                            <Link to="/profileData">Andmed</Link>
                        </div>
                        <div className="row profile-results col-lg-8">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <img src={Trees} alt="trees"/>
                                <div className="overlay">
                                    <h4>Tulemus</h4>
                                    <img src={One} className="img-result"/>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <img src={Trees} alt="trees"/>
                                <div className="overlay">
                                    <h4>Tulemus</h4>
                                    <img src={Two} className="img-result"/>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <img src={Trees} alt="trees"/>
                                <div className="overlay">
                                    <h4>Tulemus</h4>
                                    <img src={Five} className="img-result"/>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <img src={Trees} alt="Trees"/>
                                <div className="overlay">
                                    <h4>Tulemus</h4>
                                    <img src={Three} className="img-result"/>
                                </div>
                            </div>
                            <div className="col-lg-12 my-auto text-right">
                                <button className="col-lg-3 col-md-3 col-sm-3 btn btn-danger contact-next">Järgmine</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
