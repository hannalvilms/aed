import React, { Component } from 'react';
import Navbar from "../../components/Nav/Navbar"
import LoginContent from "../../components/Content/LoginContent";
import Footer from "../../components/Footer/Footer";

export default class Login extends Component {
    render() {
        return (
            <div id="login">
                <Navbar />
                <LoginContent />
                <Footer />
            </div>
        )
    }
}