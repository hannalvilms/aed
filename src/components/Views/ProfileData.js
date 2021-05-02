import React, { Component } from 'react';
import ProfileDataContent from '../Content/ProfileDataContent';
import LoggedNav from '../Nav/LoggedNav';
import LoggedFooter from "../Footer/LoggedFooter";

export default class ProfileData extends Component {
    render() {
        return (
            <div id="profile">
                <LoggedNav />
                <ProfileDataContent />
                <LoggedFooter />
            </div>
        )
    }
}