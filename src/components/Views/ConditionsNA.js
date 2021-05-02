import React, { Component } from 'react';
import ConditionsContent from '../Content/ConditionsContent';
import Navbar from '../Nav/Navbar';
import Footer from "../Footer/Footer";

export default class ConditionsNA extends Component {
    render() {
        return (
            <div id="profile">
                <Navbar />
                <ConditionsContent />
                <Footer />
            </div>
        )
    }
}
