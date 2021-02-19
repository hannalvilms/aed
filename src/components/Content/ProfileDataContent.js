import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProfileDataContent extends Component {
    render() {
        return (
            <div className="container-fluid profile">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-12 profile-menu my-auto">
                            <Link to="/profile">Tulemused</Link>
                            <a>Andmed</a>
                        </div>
                        <div className="row change-profile col-lg-8">
                            <form className="row col-lg-12">
                                <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                    <label>Eesnimi</label>
                                    <input type="text" className="form-control" placeholder="Hanna-Liisa" readOnly/>
                                </div>
                                <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                    <label>Perekonnanimi</label>
                                    <input type="text" className="form-control" placeholder="Vilms" readOnly/>
                                </div>
                                <div className="form-group col-lg-12">
                                    <label>Kool</label>
                                    <input type="email" className="form-control" placeholder="Aravete KK" readOnly/>
                                </div>
                                <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                    <label>Kasutajanimi</label>
                                    <input type="username" className="form-control" placeholder="hanna123" readOnly/>
                                </div>
                                <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                    <label htmlFor="exampleInputPassword1">Parool</label>
                                    <input type="password" className="form-control" placeholder="Password" readOnly/>
                                </div>
                                <div className="col-lg-12">
                                    <button className="col-lg-4 col-md-4 col-sm-5 btn btn-danger float-right">Kustuta
                                        konto
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
