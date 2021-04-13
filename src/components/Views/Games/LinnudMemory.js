import React, { Component } from 'react';
import LinnudMemoryGame from '../../Games/Memory/LinnudMemoryGame';
import LinnudGameContent from "../../Content/LinnudGameContent";
import LoggedNav from '../../Nav/LoggedNav';
import Footer from "../../Footer/Footer";

export default class LinnudMemory extends Component {
    render() {
        return (
            <div id="profile">
                <LoggedNav />
                <LinnudGameContent />
                <LinnudMemoryGame />
                <Footer />
            </div>
        )
    }
}