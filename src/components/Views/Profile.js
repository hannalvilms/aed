import React, { Component } from 'react';
import ProfileContent from '../Content/ProfileContent';
import LoggedNav from '../Nav/LoggedNav';
import Footer from "../Footer/Footer";

export default class Profile extends Component {
    render() {
        return (
            <div id="profile">
                <LoggedNav />
                <ProfileContent />
                <Footer />
            </div>
        )
    }
}