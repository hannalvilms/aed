import React, { Component } from 'react';
import axios from 'axios';
import {API} from '../../url';
import {Link} from "react-router-dom";

// noinspection JSDeprecatedSymbols
export default class RegisterContent extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            confirm_password: '',
            input: {},
            errors: {}
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let input = this.state.input;
        input[event.target.name] = event.target.value;

        this.setState({
            input
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        if(this.validate()){

            const fd = new FormData();
            fd.append('name', this.refs.myUsername.value);
            fd.append('email', this.refs.myEmail.value);
            fd.append('password', this.refs.pass.value);
            fd.append('confirm_password', this.refs.confpass.value);
            axios.post(API + '/api/register', fd)
                .then(res => {
                    let input = {};
                    input["email"] = "";
                    input["name"] = "";
                    input["password"] = "";
                    input["confirm_password"] = "";
                    this.setState({input:input});

                    alert('Kasutaja loodi edukalt!');

                })
            this.myFormRef.reset();
        }
    }

    validate(){
        let input = this.state.input;
        let errors = {};
        let isValid = true;

        if (!input["name"]) {
            isValid = false;
            errors["name"] = "Sisesta nimi.";
        }

        if (!input["email"]) {
            isValid = false;
            errors["email"] = "Sisesta e-mail.";
        }

        if (!input["password"]) {
            isValid = false;
            errors["password"] = "Sisesta parool.";
        }


        if (!input["confirm_password"]) {
            isValid = false;
            errors["confirm_password"] = "Kinnita parool.";
        }

        if (typeof input["password"] !== "undefined") {
            if(input["password"].length < 8){
                isValid = false;
                errors["password"] = "Parool peab olema vähemalt 8 karakterit.";
            }
        }

        if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {

            if (input["password"] !== input["confirm_password"]) {
                isValid = false;
                errors["password"] = "Paroolid ei ühti!";
            }
        }

        this.setState({
            errors: errors
        });

        return isValid;
    }

    render() {
        return (
            <div className="container-fluid adjust-height">
                <div className="container">
                    <div className="row register">
                        <form className="col-lg-12 needs-validation" onSubmit={this.handleSubmit} ref={(el) => this.myFormRef = el}>
                            <h3>Loo konto</h3>
                            <div className="register-input">
                                <input
                                    type="email"
                                    name="email"
                                    ref="myEmail"
                                    onChange={this.handleChange}
                                    className="form-control register-email"
                                    placeholder="E-mail"
                                    id="email" />

                                <div className="text-danger">{this.state.errors.email}</div>
                            </div>

                            <div className="register-input">
                                <input
                                    type="name"
                                    name="name"
                                    onChange={this.handleChange}
                                    placeholder="Ees- ja perekonnanimi"
                                    id="name"
                                    ref="myUsername"
                                    className="form-control register-name" />

                                <div className="text-danger">{this.state.errors.name}</div>
                            </div>

                            <div className="register-input">
                                <input
                                    type="password"
                                    name="password"
                                    ref="pass"
                                    id="password"
                                    onChange={this.handleChange}
                                    placeholder="Parool"
                                    className="form-control register-pass" />

                                <div className="text-danger">{this.state.errors.password}</div>
                            </div>

                            <div className="register-input">
                                <input
                                    type="password"
                                    name="confirm_password"
                                    onChange={this.handleChange}
                                    className="form-control register-pass-check"
                                    ref="confpass"
                                    placeholder="Korda parooli"
                                    id="confirm_password"/>

                                <div className="text-danger">{this.state.errors.confirm_password}</div>
                            </div>

                            <div className="col-12">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck"
                                           required/>
                                    <label className="form-check-label" htmlFor="invalidCheck">
                                        Konto loomisel nõustute <Link to="conditions">kasutustingimustega.</Link>
                                    </label>
                                    <div className="invalid-feedback">
                                        Konto loomisel tuleb nõustuda kasutustingimustega.
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <input type="submit" className="btn register-submit" value="Loo konto"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}