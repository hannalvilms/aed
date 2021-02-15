import React, { Component } from 'react';
import LinnudHangmanGame from '../../Games/Hangman/LinnudHangmanGame';
import MaismaaGameContent from "../../Content/MaismaaGameContent";
import LoggedNav from '../../Nav/LoggedNav';
import Footer from "../../Footer/Footer";

export default class LinnudHangman extends Component {
    render() {
        return (
            <div id="profile">
                <LoggedNav />
                <MaismaaGameContent />
                <LinnudHangmanGame />
                <Footer />
            </div>
        )
    }
}
