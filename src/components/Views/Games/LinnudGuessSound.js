import React, { Component } from 'react';
import LinnudGuessSoundGame from "../../Games/GuessSound/LinnudGuessSoundGame";
import LinnudGameContent from "../../Content/LinnudGameContent";
import LoggedNav from '../../Nav/LoggedNav';
import LoggedFooter from "../../Footer/LoggedFooter";

export default class LinnudGuessSound extends Component {
    render() {
        return (
            <div id="profile">
                <LoggedNav />
                <LinnudGameContent />
                <LinnudGuessSoundGame />
                <LoggedFooter />
            </div>
        )
    }
}
