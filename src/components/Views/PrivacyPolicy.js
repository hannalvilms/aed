import React, { Component } from 'react';
import PrivacyPolicyContent from '../Content/PrivacyPolicyContent';
import LoggedNav from '../Nav/LoggedNav';
import LoggedFooter from "../Footer/LoggedFooter";

export default class PrivacyPolicy extends Component {
    render() {
        return (
            <div id="profile">
                <LoggedNav />
                <PrivacyPolicyContent />
                <LoggedFooter />
            </div>
        )
    }
}
