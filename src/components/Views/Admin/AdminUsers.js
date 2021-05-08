import React, { Component } from 'react';
import AdminContent from '../../Content/Admin/AdminContent';
import LoggedNav from "../../Nav/LoggedNav";
import LoggedFooter from "../../Footer/LoggedFooter";

export default class AdminUsers extends Component {
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
