import React, { Component } from 'react';
import LoggedNavbar from "../../components/Nav/LoggedNav";
import KoduloomadContent from "../../components/Content/KoduloomadContent";
import LoggedFooter from "../../components/Footer/LoggedFooter";

export default class Koduloomad extends Component {
    render() {
        return (
            <div>
                <LoggedNavbar />
                <div className="stretch-games">
                    <KoduloomadContent />
                    <div className="footer-stretch">
                        <LoggedFooter />
                    </div>
                </div>
            </div>

        )
    }
}