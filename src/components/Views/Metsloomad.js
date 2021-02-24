import React, { Component } from 'react';
import LoggedNavbar from "../../components/Nav/LoggedNav";
import MetsloomadContent from "../../components/Content/MetsloomadContent";
import Footer from "../../components/Footer/Footer";

export default class Metsloomad extends Component {
    render() {
        return (
            <div>
                <LoggedNavbar />
                <MetsloomadContent />
                <Footer />
            </div>

        )
    }
}