import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import {API} from '../../url';

export default class ProfileDataContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: [],
            email: [],
            isAdmin: 0
        }
    }

    componentDidMount() {
        this.admin();
        let user = JSON.parse(localStorage.getItem('appState'))
        let token = user.user.token;
        axios.get(API + `/api/users`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                this.setState({
                    name: [res.data.name],
                    email: [res.data.email],
                });
            })
            .catch((error) => {
                console.error(error)
            })
    }

    admin() {
        let user = JSON.parse(localStorage.getItem('appState'))
        let token = user.user.token;
        axios.get(API + `/api/admin`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((result) => {
            const results = result.data.isAdmin;
            this.setState({
                isAdmin: results
            })
        })
    }

    render() {
        let link;
        if (this.state.isAdmin === '1') {
            link = <Link to="/adminusers">Kasutajad</Link>;
        }
        return (
            <div className="container-fluid profile">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-12 profile-menu">
                            {link}
                            <Link to="/tulemused">Tulemused</Link>
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
