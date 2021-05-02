import React, { Component } from 'react';
import LoggedNavbar from "../../components/Nav/LoggedNav";
import MaismaaloomadContent from "../../components/Content/MaismaaloomadContent";
import LoggedFooter from "../../components/Footer/LoggedFooter";

export default class Maismaaloomad extends Component {
    render() {
        return (
            <div>
                <LoggedNavbar />
                <div className="stretch-games">
                    <MaismaaloomadContent />
                    <div className="footer-stretch">
                        <LoggedFooter />
                    </div>
                </div>
            </div>

        )
    }
}