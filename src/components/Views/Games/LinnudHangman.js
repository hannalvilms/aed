import React, { Component } from 'react';
import LinnudHangmanGame from '../../Games/Hangman/LinnudHangmanGame';
import LinnudGameContent from "../../Content/LinnudGameContent";
import LoggedNav from '../../Nav/LoggedNav';
import LoggedFooter from "../../Footer/LoggedFooter";

export default class LinnudHangman extends Component {
    render() {
        return (
            <div id="profile">
                <LoggedNav />
                <LinnudGameContent />
                <LinnudHangmanGame />
                <LoggedFooter />
            </div>
        )
    }
}
