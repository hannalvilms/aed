import React, { Component } from 'react';
import AdminContent from '../../Content/Admin/AdminContent';
import AdminNav from '../../Nav/AdminNav';

export default class AdminUsers extends Component {
    render() {
        return (
            <div id="profile">
                <AdminNav />
                <AdminContent />
            </div>
        )
    }
}
