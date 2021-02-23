import React, { Component } from 'react';
import PrivacyPolicyContent from '../Content/PrivacyPolicyContent';
import LoggedNav from '../Nav/LoggedNav';
import Footer from "../Footer/Footer";

export default class PrivacyPolicy extends Component {
    render() {
        return (
            <div id="profile">
                <LoggedNav />
                <PrivacyPolicyContent />
                <Footer />
            </div>
        )
    }
}
