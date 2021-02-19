import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AdminContent extends Component {
    render() {
        return (
            <div className="container-fluid profile">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-12 profile-menu my-auto">
                            <Link to="admin">Kasutajad</Link>
                            <Link to="profile">Tulemused</Link>
                            <Link to="profileData">Andmed</Link>
                        </div>
                        <div className="row change-profile contact col-lg-8">
                            <form className="row col-lg-12">
                                <table className="table table-borderless">
                                    <tbody>
                                        <tr>
                                            <th scope="row">1.</th>
                                            <td>Eesnimi</td>
                                            <td>Perekonnanimi</td>
                                            <td className="table-button">
                                                <button className="col-lg-8 col-md-12 col-sm-12 btn btn-danger">
                                                    Kustuta
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2.</th>
                                            <td>Eesnimi</td>
                                            <td>Perekonnanimi</td>
                                            <td className="table-button">
                                                <button className="col-lg-8 col-md-12 col-sm-12 btn btn-danger">
                                                    Kustuta
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3.</th>
                                            <td>Eesnimi</td>
                                            <td>Perekonnanimi</td>
                                            <td className="table-button">
                                                <button className="col-lg-8 col-md-12 col-sm-12 btn btn-danger">
                                                    Kustuta
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4.</th>
                                            <td>Eesnimi</td>
                                            <td>Perekonnanimi</td>
                                            <td className="table-button">
                                                <button className="col-lg-8 col-md-12 col-sm-12 btn btn-danger">
                                                    Kustuta
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">5.</th>
                                            <td>Eesnimi</td>
                                            <td>Perekonnanimi</td>
                                            <td className="table-button">
                                                <button className="col-lg-8 col-md-12 col-sm-12 btn btn-danger">
                                                    Kustuta
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th colSpan="3"> </th>
                                            <td className="table-button">
                                                <button className="col-lg-8 col-md-12 col-sm-12 btn btn-danger contact-next">
                                                    Järgmine
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
