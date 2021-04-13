import React, { Component } from 'react';
import KoduloomadHangmanGame from '../../Games/Hangman/KoduloomadHangmanGame';
import KoduloomadGameContent from "../../Content/KoduloomadGameContent";
import LoggedNav from '../../Nav/LoggedNav';
import Footer from "../../Footer/Footer";

export default class KoduloomadHangman extends Component {
    render() {
        return (
            <div id="profile">
                <LoggedNav />
                <KoduloomadGameContent />
                <KoduloomadHangmanGame />
                <Footer />
            </div>
        )
    }
}
