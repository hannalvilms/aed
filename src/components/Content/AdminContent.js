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
                            <Link to="profile">Ajalugu</Link>
                            <Link to="profileData">Andmed</Link>
                        </div>
                        <div className="row change-profile contact col-lg-8">
                            <form className="row col-lg-12">
                                <table className="table table-borderless">
                                    <tbody>
                                        <tr>
                                            <td scope="row">1.</td>
                                            <td>Eesnimi</td>
                                            <td>Perekonnanimi</td>
                                            <td className="table-button"><button className="col-lg-8 col-md-12 col-sm-12 btn btn-danger">Kustuta</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td scope="row">2.</td>
                                            <td>Eesnimi</td>
                                            <td>Perekonnanimi</td>
                                            <td className="table-button"><button className="col-lg-8 col-md-12 col-sm-12 btn btn-danger">Kustuta</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td scope="row">3.</td>
                                            <td>Eesnimi</td>
                                            <td>Perekonnanimi</td>
                                            <td className="table-button"><button className="col-lg-8 col-md-12 col-sm-12 btn btn-danger">Kustuta</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td scope="row">4.</td>
                                            <td>Eesnimi</td>
                                            <td>Perekonnanimi</td>
                                            <td className="table-button"><button className="col-lg-8 col-md-12 col-sm-12 btn btn-danger">Kustuta</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td scope="row">5.</td>
                                            <td>Eesnimi</td>
                                            <td>Perekonnanimi</td>
                                            <td className="table-button"><button className="col-lg-8 col-md-12 col-sm-12 btn btn-danger">Kustuta</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="3"></td>
                                            <td className="table-button"><button className="col-lg-8 col-md-12 col-sm-12 btn btn-danger contact-next">Järgmine</button>
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
