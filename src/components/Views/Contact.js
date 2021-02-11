import React, { Component } from 'react';
import Navbar from "../../components/Nav/Navbar";
import ContactContent from "../Content/ContactContent";
import Footer from "../../components/Footer/Footer";

export default class Contact extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <ContactContent />
                <Footer />
            </div>
        )
    }
}