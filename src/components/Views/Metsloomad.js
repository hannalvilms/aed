import React, { Component } from 'react';
import LoggedNavbar from "../../components/Nav/LoggedNav";
import MetsloomadContent from "../../components/Content/MetsloomadContent";
import LoggedFooter from "../../components/Footer/LoggedFooter";

export default class Metsloomad extends Component {
    render() {
        return (
            <div>
                <LoggedNavbar />
                <div className="stretch-games">
                <MetsloomadContent />
                    <div className="footer-stretch">
                        <LoggedFooter />
                    </div>
                </div>
            </div>

        )
    }
}