import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

export default class ProfileDataContent extends Component {

    state = {
        name: [],
        email: [],
    }

    componentDidMount() {
        let user = JSON.parse(localStorage.getItem('appState'))
        let token = user.user.token;
        console.log(token)

        axios.get(`https://aed.academy/aed-back/api/users`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                console.log(res.data);
                this.setState({
                    name: [res.data.name],
                    email: [res.data.email],
                });
            })
            .catch((error) => {
                console.error(error)
            })
    }

    render() {
        return (
            <div className="container-fluid profile">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-12 profile-menu my-auto">
                            <Link to="/profile">Tulemused</Link>
                            <p>Andmed</p>
                        </div>
                        <div className="row change-profile col-lg-8">
                            <form className="row col-lg-12">
                                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                    <label>Nimi</label>
                                    <input type="text" className="form-control" placeholder={this.state.name} readOnly/>
                                </div>
                                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                    <label>E-mail</label>
                                    <input type="text" className="form-control" placeholder={this.state.email} readOnly/>
                                </div>
                                {/*<div className="col-lg-12">
                                    <button className="col-lg-4 col-md-4 col-sm-5 btn btn-danger float-right">Kustuta
                                        konto
                                    </button>
                                </div>*/}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
