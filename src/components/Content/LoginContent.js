import React, { Component } from 'react';
import axios from 'axios';
import {withRouter} from "react-router";
import {API} from '../../url';
class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            email : '',
            password: '',
            isLoggedIn: false,
            user: {}
        }
    }

    onSubmit(e){
        e.preventDefault();
        const {email , password} = this.state ;
        axios.post(API + '/api/login', {
            email,
            password
        })
            .then(response=> {
                let userData = {
                    token: response.data.token,
                    timestamp: new Date().toString()
                };
                let appState = {
                    isLoggedIn: true,
                    user: userData
                };
                // save app state with user date in local storage
                localStorage["appState"] = JSON.stringify(appState);
                this.setState({
                    isLoggedIn: appState.isLoggedIn,
                    user: appState.user
                });
                this.props.history.push("/avaleht-logitud");
                window.location.reload();
            })
            .catch(error=> {
                console.log('error', error);
                this.refs.email.value="";
                this.refs.password.value="";
                this.setState({err: true});
                localStorage["appState"] = JSON.stringify('');
                this.setState({
                    isLoggedIn: false,
                    user: null
                });
                alert('E-mail või parool on vale!');
            });
    }

    onChange(e){
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    render() {

       // let error = this.state.err ;
       // let msg = (!error) ? 'Login Successful' : 'Wrong Credentials' ;
       // let name = (!error) ? 'alert alert-success' : 'alert alert-danger' ;
        return (
            <div className="container-fluid adjust-height">
                <div className="container">
                    <div className="row login">
                        <form className="form-horizontal col-lg-12" method="POST" onSubmit= {this.onSubmit.bind(this)}>
                            <h3>Logi sisse</h3>
                            <div className="login-input">
                                <div className="input-group">
                                    <input placeholder="E-mail" id="email" type="email" ref="email" className="form-control login-email" name="email"  onChange={this.onChange.bind(this)} required />
                                </div>
                            </div>

                            <div className="login-input">
                                <div className="input-group">
                                    <input placeholder="Parool" id="password" type="password" ref="password" className="form-control login-pass" name="password"  onChange={this.onChange.bind(this)}  required />
                                </div>
                            </div>

                                <div className="col-12">
                                    <button type="submit" className="login-button">
                                        Logi sisse
                                    </button>
                                </div>

                        </form>

                    </div>
                </div>
            </div>

        );
    }
}

export default withRouter(Login);