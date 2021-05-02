import React, { Component } from 'react';
import AdminContent from '../Content/AdminContent';
import LoggedNav from '../Nav/LoggedNav';
import LoggedFooter from "../Footer/LoggedFooter";

export default class Admin extends Component {
    render() {
        return (
            <div id="profile">
                <LoggedNav />
                <AdminContent />
                <LoggedFooter />
            </div>
        )
    }
}
