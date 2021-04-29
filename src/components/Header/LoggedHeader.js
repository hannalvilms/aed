import React, { Component } from 'react';
import Headerimg from '../../images/header-img.png';
import axios from 'axios';

export default class Header extends Component {

    state = {
        user: [],
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
                this.setState({
                    user: [res.data.name]
                });
            })
            .catch((error) => {
                console.error(error)
            })
    }

    render() {
        return (
            <div className="container-fluid header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-5 col-sm-12 header-text">
                            <h1>Tere tulemast, {this.state.user}!</h1>
                            <p>Altpoolt leiad õppemängud.</p>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-12">
                            <img src={Headerimg} className="header-img" alt="Jänes ja rebane"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}