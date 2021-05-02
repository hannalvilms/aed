import React, { Component } from 'react';
import LoggedNavbar from "../../components/Nav/LoggedNav";
import LinnudContent from "../../components/Content/LinnudContent";
import LoggedFooter from "../../components/Footer/LoggedFooter";

export default class Linnud extends Component {
    render() {
        return (
            <div>
                <LoggedNavbar />
                <div className="stretch-games">
                    <LinnudContent />
                    <div className="footer-stretch">
                        <LoggedFooter />
                    </div>
                </div>
            </div>

        )
    }
}