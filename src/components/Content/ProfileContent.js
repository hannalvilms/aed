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
        };
        this.user = {
            isAdmin: 0
        }
    }

    componentDidMount() {
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

        axios.get(API + `/api/admin`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((admin) => {
            const admins = admin.data.isAdmin;
            this.user = {
                isAdmin: admins
            }
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

    renderLink =(test)=>  {
        if (test === '1') {
            return <Link to="/adminusers">Kasutajad</Link>;
        } else {
            return "";
        }
    }

    render() {
        return (
            <div className="container-fluid profile">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-12 profile-menu">
                            {this.renderLink(this.user.isAdmin)}
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
