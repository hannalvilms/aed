import React, { Component } from 'react';
import ConditionsContent from '../Content/ConditionsContent';
import LoggedNav from '../Nav/LoggedNav';
import Footer from "../Footer/Footer";

export default class Conditions extends Component {
    render() {
        return (
            <div id="profile">
                <LoggedNav />
                <ConditionsContent />
                <Footer />
            </div>
        )
    }
}
