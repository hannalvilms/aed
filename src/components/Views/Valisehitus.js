import React, { Component } from 'react';
import LoggedNavbar from "../../components/Nav/LoggedNav";
import ValisehitusContent from "../../components/Content/ValisehitusContent";
import LoggedFooter from "../../components/Footer/LoggedFooter";

export default class Valisehitus extends Component {
    render() {
        return (
            <div>
                <LoggedNavbar />
                <div className="stretch-games">
                    <ValisehitusContent />
                    <div className="footer-stretch">
                        <LoggedFooter />
                    </div>
                </div>
            </div>

        )
    }
}