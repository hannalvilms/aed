import React, { Component } from 'react';
import KoduloomadMemoryGame from '../../Games/Memory/KoduloomadMemoryGame';
import KoduloomadGameContent from "../../Content/KoduloomadGameContent";
import LoggedNav from '../../Nav/LoggedNav';
import Footer from "../../Footer/Footer";

export default class KoduloomadMemory extends Component {
    render() {
        return (
            <div id="profile">
                <LoggedNav />
                <KoduloomadGameContent />
                <KoduloomadMemoryGame />
                <Footer />
            </div>
        )
    }
}