import React, { Component } from 'react';
import LoggedNavbar from "../../components/Nav/LoggedNav";
import VeeloomadContent from "../../components/Content/VeeloomadContent";
import LoggedFooter from "../../components/Footer/LoggedFooter";

export default class Veeloomad extends Component {
    render() {
        return (
            <div>
                <LoggedNavbar />
                <div className="stretch-games">
                    <VeeloomadContent />
                    <div className="footer-stretch">
                        <LoggedFooter />
                    </div>
                </div>
            </div>

        )
    }
}