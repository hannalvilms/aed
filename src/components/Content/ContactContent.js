import React, { Component } from 'react';
import Contact from '../../images/contact.png';

export default class ContactContent extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="container">
                    <div className="row contact">
                        <div className="col-lg-3 col-md-12 contact-text">
                            <h1>Kontakt</h1>
                            <p>E-post: aed@academy.com</p>
                        </div>
                        <div className="col-lg-9 col-md-12 my-auto contact-img">
                            <img src={Contact}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}