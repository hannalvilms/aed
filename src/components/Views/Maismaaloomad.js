import React, { Component } from 'react';
import LoggedNavbar from "../../components/Nav/LoggedNav";
import MaismaaloomadContent from "../../components/Content/MaismaaloomadContent";
import Footer from "../../components/Footer/Footer";

export default class Maismaaloomad extends Component {
    render() {
        return (
            <div>
                <LoggedNavbar />
                <MaismaaloomadContent />
                <Footer />
            </div>

        )
    }
}