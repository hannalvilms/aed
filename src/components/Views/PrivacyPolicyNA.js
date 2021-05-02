import React, { Component } from 'react';
import PrivacyPolicyContent from '../Content/PrivacyPolicyContent';
import Navbar from '../Nav/Navbar';
import Footer from "../Footer/Footer";

export default class PrivacyPolicyNA extends Component {
    render() {
        return (
            <div id="profile">
                <Navbar />
                <PrivacyPolicyContent />
                <Footer />
            </div>
        )
    }
}
