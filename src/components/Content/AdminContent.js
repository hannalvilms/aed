import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
//import Trees from "../../images/trees.jpg";
//import One from "../../images/one-star.png";

export default class AdminContent extends Component {

    constructor(props){
        super(props);
        this.state = {
            names : [],
        };
    }

    async componentDidMount() {
        let user = JSON.parse(localStorage.getItem('appState'))
        let token = user.user.token;
        console.log(token)
        const res = await axios.get(`https://aed.academy/aed-back/api/all-users`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        if (res) {
            console.log(res.data.data)
            let allnames = res.data.data;
            this.setState({
                names: [...allnames]
            });
        }
    }

    renderPost = () => {
        let i = 1;
        return this.state.names
            ? this.state.names.map(data => (
                <tr className="row col-lg-12 col-md-12 col-sm-12" key={data.id}>
                    <th scope="row" className="col-lg-1 col-md-1 col-sm-1">{data.id} {i++}.</th>
                    <td className="col-lg-4 col-md-4 col-sm-4">{data.name}</td>
                    <td className="col-lg-5 col-md-5 col-sm-5">{data.email}</td>
                    <td className="table-button col-lg-2 col-md-2 col-sm-6">
                        <button className="col-lg-8 col-md-12 col-sm-12 btn btn-danger">
                            Kustuta
                        </button>
                    </td>
                </tr>
            ))
            : "";
    };

    render() {
        return (
            <div className="container-fluid profile">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-sm-12 profile-menu my-auto">
                            <Link to="admin">Kasutajad</Link>
                            <Link to="profile">Tulemused</Link>
                            <Link to="profileData">Andmed</Link>
                        </div>
                        <div className="row change-profile admin-names contact col-lg-9">
                            <form className="row col-lg-12">
                                <table className="table table-borderless">
                                    <tbody>
                                    {this.renderPost()}
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
