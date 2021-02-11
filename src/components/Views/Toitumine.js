import React, { Component } from 'react';
import LoggedNavbar from "../../components/Nav/LoggedNav";
import ToitumineContent from "../../components/Content/ToitumineContent";
import Footer from "../../components/Footer/Footer";

export default class Toitumine extends Component {
    render() {
        return (
            <div>
                <LoggedNavbar />
                <ToitumineContent />
                <Footer />
            </div>

        )
    }
}