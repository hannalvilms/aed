import React, {Component} from 'react';
//import { Link } from 'react-router-dom';

export default class LoginContent extends Component {
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
                    <div className="row login">
                        <form className="col-lg-12 needs-validation" noValidate>
                            <h3>Logi sisse</h3>
                            <div className="alert alert-danger" role="alert">
                                Vale kasutajanimi või parool!
                            </div>
                            <div className="login-input">
                                <div className="input-group has-validation">
                                    <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" placeholder="Kasutajanimi" required/>
                                    <div className="invalid-feedback">
                                        Sisesta kasutajanimi
                                    </div>
                                </div>
                            </div>
                            <div className="login-input">
                                <input  type="password" className="form-control" id="validationCustom03" placeholder="Parool" required/>
                                <div className="invalid-feedback">
                                    Sisesta parool.
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
