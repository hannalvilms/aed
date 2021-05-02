import React, { Component } from 'react';
import LoggedHeader from "../../../components/Header/LoggedHeader";
import AdminFrontpageContent from "../../../components/Content/Admin/AdminFrontpageContent";
import LoggedFooter from "../../../components/Footer/LoggedFooter";
import AdminNav from "../../Nav/AdminNav";

export default class AdminFrontpage extends Component {
    render() {
        return (
            <div id="container">
                <AdminNav />
                <LoggedHeader />
                <div className="stretch">
                    <AdminFrontpageContent />
                    <div className="footer-stretch">
                        <LoggedFooter />
                    </div>
                </div>
            </div>
        )
    }
}