import React, { Component } from 'react';
import LoggedNavbar from "../../components/Nav/LoggedNav";
import LinnudContent from "../../components/Content/LinnudContent";
import Footer from "../../components/Footer/Footer";

export default class Linnud extends Component {
    render() {
        return (
            <div>
                <LoggedNavbar />
                <div className="stretch-games">
                    <LinnudContent />
                    <div className="footer-stretch">
                        <Footer />
                    </div>
                </div>
            </div>

        )
    }
}