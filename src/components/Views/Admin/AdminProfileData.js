import React, { Component } from 'react';
import AdminProfileDataContent from '../../Content/Admin/AdminProfileDataContent';
import AdminNav from '../../Nav/AdminNav';

export default class AdminProfileData extends Component {
    render() {
        return (
            <div id="profile">
                <AdminNav />
                <AdminProfileDataContent />
            </div>
        )
    }
}