import React, { Component } from 'react';
import LoggedNavbar from "../../components/Nav/LoggedNav";
import VeeloomadContent from "../../components/Content/VeeloomadContent";
import Footer from "../../components/Footer/Footer";

export default class Veeloomad extends Component {
    render() {
        return (
            <div>
                <LoggedNavbar />
                <VeeloomadContent />
                <Footer />
            </div>

        )
    }
}