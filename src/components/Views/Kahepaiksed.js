import React, { Component } from 'react';
import LoggedNavbar from "../../components/Nav/LoggedNav";
import KahepaiksedContent from "../../components/Content/KahepaiksedContent";
import LoggedFooter from "../../components/Footer/LoggedFooter";

export default class Kahepaiksed extends Component {
    render() {
        return (
            <div>
                <LoggedNavbar />
                <div className="stretch-games">
                    <KahepaiksedContent />
                    <div className="footer-stretch">
                        <LoggedFooter />
                    </div>
                </div>
            </div>

        )
    }
}