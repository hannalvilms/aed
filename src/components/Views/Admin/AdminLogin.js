import React, { Component } from 'react';
import AdminNavbar from "../../../components/Nav/AdminNavbar"
import AdminLoginContent from "../../../components/Content/Admin/AdminLoginContent";
import Footer from "../../../components/Footer/Footer";

export default class AdminLogin extends Component {
    render() {
        return (
            <div id="login">
                <AdminNavbar />
                <AdminLoginContent />
                <Footer />
            </div>
        )
    }
}