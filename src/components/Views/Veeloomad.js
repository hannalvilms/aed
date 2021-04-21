import React, { Component } from 'react';
import LoggedNavbar from "../../components/Nav/LoggedNav";
import VeeloomadContent from "../../components/Content/VeeloomadContent";
import Footer from "../../components/Footer/Footer";

export default class Veeloomad extends Component {
    render() {
        return (
            <div>
                <LoggedNavbar />
                <div className="stretch-games">
                    <VeeloomadContent />
                    <div className="footer-stretch">
                        <Footer />
                    </div>
                </div>
            </div>

        )
    }
}