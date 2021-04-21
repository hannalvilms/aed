import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

export default class ProfileDataContent extends Component {

    state = {
        user: []
    }

    componentDidMount() {
        let access_token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMzYyZDA2ZTUyNjZiMWVlMmU2MzNjZDc3NTBjYjZmYzgwNWIzZDlhMzNjYTQwMTEzNWJkYjdhNjUxY2E5NjVkNWEzYmE4Y2E1MjM4MTQ1MTYiLCJpYXQiOjE2MTg1MDk0NTcuMzUxNTY5LCJuYmYiOjE2MTg1MDk0NTcuMzUxNTczLCJleHAiOjE2NTAwNDU0NTcuMjk1OTk5LCJzdWIiOiIzOCIsInNjb3BlcyI6W119.g0fa4mIZ_HzN-07qkBdyxmgNXISDXLqWoP6ucSrtf4K8LctX226mN6FeIMc-UFwucZSc7vCIyC7MLvg42jhBitS_Obw2zVw6Ssx-HgFNhMdm8ONWfnwwNw_OmSQfP97HCgll4imipRlUY5defACBbXO7qQVXViUs1IVJQVjS0k5QFk-1PQnByt3C0zanntog_z6TLt_QKIE-QeZQDexdmZIM632a_79yQEHjqHxvvzzGQxQCUjJ9PUde2FMlNROJIG4p0dd30T5dJBMYaLVMv9z62YxgKKKKBugIHNswZ-ljIC2wsN-ppHxhBdOpdl3YbmMaFOMJ8W9jIJfs2GnLRwsvrqx2bKQ0zaxZxDTv34cHc7Qj0TEe--6T-QGsjZ94Bhc0egT6pP5jmav9tYHbmMX7mZYks4xUuqaXABx6QsPI7b5mzGxcPuu1mlfVv_z9WV7MBOwrqZtP4WA3NOPawc20mczyt_vZAuRyX9nrDAWbrKslTcMIZ8qJj5W8KPnHsP_IbUwJuECj3e-TTu8c6QUr9sdCl3FMk18doaBJafZbFONJIOCF5buPWasQA9Z0h6nssSRnNQ6kmp6QKoQ93T-VZWXyKo2DMFcI0sGxHveW2uhoIDglhdzItMdZCHHyOR6oXEC1uXLVda_wAt9X-JG6TfK4dQXvHXWJBKddHYA"
        axios.get(`http://localhost:8000/api/users`, {
            headers: {
                'Authorization': `Bearer ${access_token}`
            }
        })
            .then((res) => {
                console.log(res.data);
                this.setState({ user: [res.data.name] });
            })
            .catch((error) => {
                console.error(error)
            })
    }

    render() {
        return (
            <div className="container-fluid profile">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-12 profile-menu my-auto">
                            <Link to="/profile">Tulemused</Link>
                            <p>Andmed</p>
                        </div>
                        <div className="row change-profile col-lg-8">
                            <form className="row col-lg-12">
                                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                    <label>Nimi</label>
                                    <input type="text" className="form-control" placeholder={this.state.user} readOnly/>
                                </div>
                                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                    <label htmlFor="exampleInputPassword1">Parool</label>
                                    <input type="password" className="form-control" placeholder="Password" readOnly/>
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
