import React, { Component } from 'react';
import KoduloomadHangmanGame from '../../Games/Hangman/KoduloomadHangmanGame';
import KoduloomadGameContent from "../../Content/KoduloomadGameContent";
import LoggedNav from '../../Nav/LoggedNav';
import LoggedFooter from "../../Footer/LoggedFooter";

export default class KoduloomadHangman extends Component {
    render() {
        return (
            <div id="profile">
                <LoggedNav />
                <KoduloomadGameContent />
                <KoduloomadHangmanGame />
                <LoggedFooter />
            </div>
        )
    }
}
