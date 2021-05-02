import React, { Component } from 'react';
import AdminProfileContent from '../../Content/Admin/AdminProfileContent';
import AdminNav from '../../Nav/AdminNav';

export default class AdminProfile extends Component {
    render() {
        return (
            <div id="profile">
                <AdminNav />
                <AdminProfileContent />
            </div>
        )
    }
}