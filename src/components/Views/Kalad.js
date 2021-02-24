import React, { Component } from 'react';
import LoggedNavbar from "../../components/Nav/LoggedNav";
import KaladContent from "../../components/Content/KaladContent";
import Footer from "../../components/Footer/Footer";

export default class Kalad extends Component {
    render() {
        return (
            <div>
                <LoggedNavbar />
                <KaladContent />
                <Footer />
            </div>

        )
    }
}