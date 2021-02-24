import React, { Component } from 'react';
import LoggedNavbar from "../../components/Nav/LoggedNav";
import ValisehitusContent from "../../components/Content/ValisehitusContent";
import Footer from "../../components/Footer/Footer";

export default class Valisehitus extends Component {
    render() {
        return (
            <div>
                <LoggedNavbar />
                <ValisehitusContent />
                <Footer />
            </div>

        )
    }
}