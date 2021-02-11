import React, { Component } from 'react';
import ProfileDataContent from '../Content/ProfileDataContent';
import LoggedNav from '../Nav/LoggedNav';
import Footer from "../Footer/Footer";

export default class ProfileData extends Component {
    render() {
        return (
            <div id="profile">
                <LoggedNav />
                <ProfileDataContent />
                <Footer />
            </div>
        )
    }
}