import React, { Component } from 'react';
import LoggedNavbar from "../../components/Nav/LoggedNav";
import KoduloomadContent from "../../components/Content/KoduloomadContent";
import Footer from "../../components/Footer/Footer";

export default class Koduloomad extends Component {
    render() {
        return (
            <div>
                <LoggedNavbar />
                <div className="stretch-games">
                    <KoduloomadContent />
                    <div className="footer-stretch">
                        <Footer />
                    </div>
                </div>
            </div>

        )
    }
}