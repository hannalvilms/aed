import React, { Component } from 'react';
import LoggedNavbar from "../../components/Nav/LoggedNav";
import KaladContent from "../../components/Content/KaladContent";
import LoggedFooter from "../../components/Footer/LoggedFooter";

export default class Kalad extends Component {
    render() {
        return (
            <div>
                <LoggedNavbar />
                <div className="stretch-games">
                    <KaladContent />
                    <div className="footer-stretch">
                        <LoggedFooter />
                    </div>
                </div>
            </div>

        )
    }
}