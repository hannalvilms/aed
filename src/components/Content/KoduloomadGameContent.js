import React, { Component } from 'react';
import Back from "../../images/back.svg";
import {Link} from "react-router-dom";

export default class KoduloomadGameContent extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="container">
                    <div className="row game-content">
                        <div className="col-lg-6 col-sm-6">
                            <Link to="/koduloomad"><p className="lead"><img className="arrow-back" alt="arrow-back"src={Back}/> Tagasi</p></Link>
                        </div>
                        <div className="col-lg-6 col-sm-6 text-gamecontent">
                            <h4>Koduloomad</h4>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
