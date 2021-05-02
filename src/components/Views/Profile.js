import React, { Component } from 'react';
import ProfileContent from '../Content/ProfileContent';
import LoggedNav from '../Nav/LoggedNav';
import LoggedFooter from "../Footer/LoggedFooter";

export default class Profile extends Component {
    render() {
        return (
            <div id="profile">
                <LoggedNav />
                <ProfileContent />
                <LoggedFooter />
            </div>
        )
    }
}