import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Trees from "../../images/trees.jpg";
import axios from "axios";
import {API} from '../../url';
export default class ProfileContent extends Component {

    constructor(props){
        super(props);
        this.state = {
            results : [],
            isAdmin: 0
        };
    }

    async componentDidMount() {
        let user = JSON.parse(localStorage.getItem('appState'))
        let token = user.user.token;


        const res = await axios.get(API + `/api/results`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        if (res) {
            const results = res.data.data;
            this.setState({
                results: [...results]
            });
        }

        const result = await axios.get(API + `/api/admin`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        if(result) {
            const results = result.data.isAdmin;
            console.log(results)
            this.setState({
                isAdmin: results
            })
            console.log(this.state.isAdmin)
        }
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
            : "";
    };

    render() {
        let link;
        console.log(this.state.isAdmin)
        if (this.state.isAdmin === 1) {
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
