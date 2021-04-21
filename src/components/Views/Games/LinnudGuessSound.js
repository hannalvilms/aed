import React, { Component } from 'react';
import LinnudGuessSoundGame from "../../Games/GuessSound/LinnudGuessSoundGame";
import LinnudGameContent from "../../Content/LinnudGameContent";
import LoggedNav from '../../Nav/LoggedNav';
import Footer from "../../Footer/Footer";

export default class LinnudGuessSound extends Component {
    render() {
        return (
            <div id="profile">
                <LoggedNav />
                <LinnudGameContent />
                <LinnudGuessSoundGame />
                <Footer />
            </div>
        )
    }
}
