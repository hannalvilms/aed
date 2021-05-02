import React, { Component } from 'react';
import KaladMemoryGame from '../../Games/Memory/KaladMemoryGame';
import KaladGameContent from "../../Content/KaladGameContent";
import LoggedNav from '../../Nav/LoggedNav';
import LoggedFooter from "../../Footer/LoggedFooter";

export default class KaladMemory extends Component {
    render() {
        return (
            <div id="profile">
                <LoggedNav />
                <KaladGameContent />
                <KaladMemoryGame />
                <LoggedFooter />
            </div>
        )
    }
}