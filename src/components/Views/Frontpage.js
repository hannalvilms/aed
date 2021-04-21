import React, { Component } from 'react';
import Navbar from "../../components/Nav/Navbar";
import Header from "../../components/Header/Header";
import FrontpageContent from "../../components/Content/FrontpageContent";
import Footer from "../../components/Footer/Footer";

export default class Frontpage extends Component {
    render() {
        return (
            <div id="container">
                <Navbar />
                <Header />
                <div className="stretch">
                    <FrontpageContent />
                    <div className="footer-stretch">
                        <Footer />
                    </div>
                </div>
            </div>
        )
    }
}