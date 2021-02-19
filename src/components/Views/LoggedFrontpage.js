import React, { Component } from 'react';
import LoggedNavbar from "../../components/Nav/LoggedNav";
import LoggedHeader from "../../components/Header/LoggedHeader";
import FrontpageContent from "../../components/Content/FrontpageContent";
import Footer from "../../components/Footer/Footer";

export default class Frontpage extends Component {
    render() {
        return (
            <div id="container">
                <LoggedNavbar />
                <LoggedHeader />
                <FrontpageContent />
                <Footer />
            </div>
        )
    }
}
