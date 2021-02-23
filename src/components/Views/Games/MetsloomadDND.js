import React, { Component } from 'react';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import MetsloomadDNDGame from '../../Games/DND/MetsloomadDNDGame';
import MaismaaGameContent from "../../Content/MaismaaGameContent";
import LoggedNav from '../../Nav/LoggedNav';
import Footer from "../../Footer/Footer";

export default class MetsloomadDND extends Component {
    render() {
        return (
            <div id="profile">
                <LoggedNav />
                <MaismaaGameContent />
                <DndProvider backend={HTML5Backend}>
                    <MetsloomadDNDGame />
                </DndProvider>
                <Footer />
            </div>
        )
    }
}
