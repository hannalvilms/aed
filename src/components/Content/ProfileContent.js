import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Trees from "../../images/trees.jpg";
import axios from "axios";
import {API} from '../../url';
export default class ProfileContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            results: [],
            isAdmin: 0
        }
    }

    componentDidMount() {
        this.admin();
        let user = JSON.parse(localStorage.getItem('appState'))
        let token = user.user.token;

        axios.get(API + `/api/results`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((res) => {
            const results = res.data.data;
            this.setState({
                results: [...results]
            });
        })
    }

    renderResults() {
        return this.state.results
            ? this.state.results.map(data => (
                <div className="col-lg-6 col-md-6 col-sm-10 results" key={data.id}>
                    <img src={Trees} alt="trees"/>
                    <div className="overlay">
                        <h4>{data.name}</h4>
                        <h6>{data.description}</h6>
                        <h5>Tulemus: {data.score}</h5>
                        <h5>Hinne: {data.grade}</h5>
                    </div>
                </div>
            ))
            : "Laen andmeid..";
    };

    admin() {
        let user = JSON.parse(localStorage.getItem('appState'))
        let token = user.user.token;
        axios.get(API + `/api/admin`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((admin) => {
            const admins = admin.data.isAdmin;
            this.setState({
                isAdmin: admins
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
                            <p>Tulemused</p>
                            <Link to="/andmed">Andmed</Link>
                        </div>
                        <div className="row profile-results col-lg-8 col-sm-12">
                            {this.renderResults()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
