import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

export default class RegisterContent extends Component {
    componentDidMount() {
        (function () {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            let forms = document.querySelectorAll('.needs-validation');

            // Loop over them and prevent submission
            Array.prototype.slice.call(forms)
                .forEach(function (form) {
                    form.addEventListener('submit', function (event) {
                        if (!form.checkValidity()) {
                            event.preventDefault();
                            event.stopPropagation()
                        }

                        form.classList.add('was-validated')
                    }, false)
                })
        })()
    }
    render() {
        return (
            <div className="container-fluid adjust-height">
                <div className="container">
                    <div className="row register">
                        <form className="col-lg-12 needs-validation" noValidate>
                            <h3>Loo konto</h3>
                            <div className="register-input">
                                <input type="text" className="form-control" id="validationCustom01" placeholder="Eesnimi" required/>
                                <div className="invalid-feedback">
                                    Sisesta eesnimi.
                                </div>
                            </div>
                            <div className="register-input">
                                <input type="text" className="form-control" id="validationCustom02" placeholder="Perekonnanimi" required/>
                                <div className="invalid-feedback">
                                    Sisesta perekonnanimi.
                                </div>
                            </div>
                            <div className="register-input">
                                <div className="input-group has-validation">
                                    <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" placeholder="Kasutajanimi" required/>
                                    <div className="invalid-feedback">
                                        Sisesta kasutajanimi.
                                    </div>
                                </div>
                            </div>
                            <div className="register-input">
                                <input type="password" className="form-control" id="validationCustom03" placeholder="Parool" required/>
                                <div className="invalid-feedback">
                                    Sisesta parool.
                                </div>
                            </div>
                            <div className="register-input">
                                <input type="date" className="form-control" id="validationCustom03" placeholder="Sünni kuupäev"/>
                            </div>
                            <div className="col-12">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck"
                                           required/>
                                    <label className="form-check-label" htmlFor="invalidCheck">
                                        Konto loomisel nõustute kasutustingimustega.
                                    </label>
                                    <div className="invalid-feedback">
                                        Konto loomisel tuleb nõustuda kasutustingimustega.
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="" type="submit">Loo konto</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
