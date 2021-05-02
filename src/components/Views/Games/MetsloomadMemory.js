import React, { Component } from 'react';
import MetsloomadMemoryGame from '../../Games/Memory/MetsloomadMemoryGame';
import MetsloomadGameContent from "../../Content/MetsloomadGameContent";
import LoggedNav from '../../Nav/LoggedNav';
import LoggedFooter from "../../Footer/LoggedFooter";

export default class MetsloomadMemory extends Component {
    render() {
        return (
            <div id="profile">
                <LoggedNav />
                <MetsloomadGameContent />
                <MetsloomadMemoryGame />
                <LoggedFooter />
            </div>
        )
    }
}