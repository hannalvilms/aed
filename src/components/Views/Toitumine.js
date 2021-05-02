import React, { Component } from 'react';
import LoggedNavbar from "../../components/Nav/LoggedNav";
import ToitumineContent from "../../components/Content/ToitumineContent";
import LoggedFooter from "../../components/Footer/LoggedFooter";

export default class Toitumine extends Component {
    render() {
        return (
            <div>
                <LoggedNavbar />
                <div className="stretch-games">
                    <ToitumineContent />
                    <div className="footer-stretch">
                        <LoggedFooter />
                    </div>
                </div>
            </div>

        )
    }
}