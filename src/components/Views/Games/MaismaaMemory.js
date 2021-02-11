import React, { Component } from 'react';
import MemoryGame from '../../Games/Memory/MaismaaMemoryGame';
import MaismaaGameContent from "../../Content/MaismaaGameContent";
import LoggedNav from '../../Nav/LoggedNav';
import Footer from "../../Footer/Footer";

export default class MaismaaMemory extends Component {
    render() {
        return (
            <div id="profile">
                <LoggedNav />
                <MaismaaGameContent />
                <MemoryGame />
                <Footer />
            </div>
        )
    }
}