import React, { Component } from 'react';
import LinnudMemoryGame from '../../Games/Memory/LinnudMemoryGame';
import LinnudGameContent from "../../Content/LinnudGameContent";
import LoggedNav from '../../Nav/LoggedNav';
import LoggedFooter from "../../Footer/LoggedFooter";

export default class LinnudMemory extends Component {
    render() {
        return (
            <div id="profile">
                <LoggedNav />
                <LinnudGameContent />
                <LinnudMemoryGame />
                <LoggedFooter />
            </div>
        )
    }
}