import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import {API} from '../../../url';
export default class AdminContent extends Component {

    constructor(props){
        super(props);
        this.state = {
            names : [],
        };
    }

     componentDidMount() {
        let user = JSON.parse(localStorage.getItem('appState'))
        let token = user.user.token;
        axios.get(API + `/api/all-users`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => {
            const names = res.data.data;
            console.log(names)
            this.setState({ names });
        })
    }

    deleteRow(id, e){
        let user = JSON.parse(localStorage.getItem('appState'))
        let token = user.user.token;
        axios.delete(API + `/api/users/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => {
            console.log(res);
            console.log(res.data.data);
            const names = this.state.names.filter(item => item.id !== id);
            this.setState({ names });
        })
    }

    render() {
        let i = 1;
        return (
            <div className="container-fluid profile">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-sm-12 profile-menu">
                            <Link to="adminusers">Kasutajad</Link>
                            {/*<Link to="adminprofile">Tulemused</Link>*/}
                            <Link to="adminprofileData">Andmed</Link>
                        </div>
                        <div className="row change-profile admin-names contact col-lg-9">
                            <form className="row col-lg-12">
                                <table className="table table-borderless">
                                    <tbody>
                                    {this.state.names.map((data) => (
                                        <tr className="row col-lg-12 col-md-12 col-sm-12" key={data.id}>
                                            <th scope="row" className="col-lg-1 col-md-1 col-sm-1">{i++}.</th>
                                            <td className="col-lg-4 col-md-4 col-sm-4">{data.name}</td>
                                            <td className="col-lg-5 col-md-5 col-sm-5">{data.email}</td>
                                            <td className="table-button col-lg-2 col-md-2 col-sm-6">
                                                <button onClick={(e) => this.deleteRow(data.id, e)} className="col-lg-8 col-md-12 col-sm-12 btn btn-danger">
                                                    Kustuta
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
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
