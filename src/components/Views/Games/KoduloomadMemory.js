import React, { Component } from 'react';
import KoduloomadMemoryGame from '../../Games/Memory/KoduloomadMemoryGame';
import KoduloomadGameContent from "../../Content/KoduloomadGameContent";
import LoggedNav from '../../Nav/LoggedNav';
import LoggedFooter from "../../Footer/LoggedFooter";

export default class KoduloomadMemory extends Component {
    render() {
        return (
            <div id="profile">
                <LoggedNav />
                <KoduloomadGameContent />
                <KoduloomadMemoryGame />
                <LoggedFooter />
            </div>
        )
    }
}