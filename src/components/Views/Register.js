import React, { Component } from 'react';
import Navbar from "../../components/Nav/Navbar"
import RegisterContent from "../../components/Content/RegisterContent";
import Footer from "../../components/Footer/Footer";

export default class Register extends Component {
    render() {
        return (
            <div id="register">
                <Navbar />
                <RegisterContent />
                <Footer />
            </div>
        )
    }
}