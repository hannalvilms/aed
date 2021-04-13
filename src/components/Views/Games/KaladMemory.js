import React, { Component } from 'react';
import KaladMemoryGame from '../../Games/Memory/KaladMemoryGame';
import KaladGameContent from "../../Content/KaladGameContent";
import LoggedNav from '../../Nav/LoggedNav';
import Footer from "../../Footer/Footer";

export default class KaladMemory extends Component {
    render() {
        return (
            <div id="profile">
                <LoggedNav />
                <KaladGameContent />
                <KaladMemoryGame />
                <Footer />
            </div>
        )
    }
}