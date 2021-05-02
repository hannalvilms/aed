import React, { Component } from 'react';
import AdminNavbar from "../../../components/Nav/AdminNavbar"
import AdminLoginContent from "../../../components/Content/Admin/AdminLoginContent";

export default class AdminLogin extends Component {
    render() {
        return (
            <div id="login">
                <AdminNavbar />
                <AdminLoginContent />
            </div>
        )
    }
}