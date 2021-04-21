import React, { Component } from 'react';
import axios from 'axios';
import {withRouter} from "react-router";

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            email : '',
            password: '',
        }
    }


    onSubmit(e){
        e.preventDefault();
        const {email , password} = this.state ;
        axios.post('http://localhost:8000/api/login', {
            email,
            password
        })
            .then(response=> {
                console.log('success', response);
                this.setState({err: false});
                this.props.history.push("/loggedFrontpage");

            })
            .catch(error=> {
                console.log('error', error);
                this.refs.email.value="";
                this.refs.password.value="";
                this.setState({err: true});
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
                        <form className="form-horizontal col-lg-12" role="form" method="POST" onSubmit= {this.onSubmit.bind(this)}>
                            <h3>Logi sisse</h3>
                            <div className="login-input">
                                <div className="input-group">
                                    <input placeholder="E-mail" id="email" type="email" ref="email" className="form-control" name="email"  onChange={this.onChange.bind(this)} required />
                                </div>
                            </div>

                            <div className="login-input">
                                <div className="input-group">
                                    <input placeholder="Parool" id="password" type="password" ref="password" className="form-control" name="password"  onChange={this.onChange.bind(this)}  required />
                                </div>
                            </div>

                                <div className="col-12">
                                    <button type="submit">
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