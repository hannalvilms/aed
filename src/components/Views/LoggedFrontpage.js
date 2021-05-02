import React, { Component } from 'react';
import LoggedNavbar from "../../components/Nav/LoggedNav";
import LoggedHeader from "../../components/Header/LoggedHeader";
import LoggedFrontpageContent from "../Content/LoggedFrontpageContent";
import LoggedFooter from "../../components/Footer/LoggedFooter";

export default class Frontpage extends Component {
    render() {
        return (
            <div id="container">
                <LoggedNavbar />
                <LoggedHeader />
                <div className="stretch">
                    <LoggedFrontpageContent />
                    <div className="footer-stretch">
                        <LoggedFooter />
                    </div>
                </div>
            </div>
        )
    }
}
