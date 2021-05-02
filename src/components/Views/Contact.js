import React, { Component } from 'react';
import LoggedNav from "../../components/Nav/LoggedNav";
import ContactContent from "../Content/ContactContent";
import LoggedFooter from "../../components/Footer/LoggedFooter";

export default class Contact extends Component {
    render() {
        return (
            <div>
                <LoggedNav />
                <ContactContent />
                <LoggedFooter />
            </div>
        )
    }
}