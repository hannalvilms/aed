import React, { Component } from 'react';
import LoggedNavbar from "../../components/Nav/LoggedNav";
import KahepaiksedContent from "../../components/Content/KahepaiksedContent";
import Footer from "../../components/Footer/Footer";

export default class Kahepaiksed extends Component {
    render() {
        return (
            <div>
                <LoggedNavbar />
                <div className="stretch-games">
                    <KahepaiksedContent />
                    <div className="footer-stretch">
                        <Footer />
                    </div>
                </div>
            </div>

        )
    }
}