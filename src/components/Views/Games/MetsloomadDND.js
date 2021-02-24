import React, { Component } from 'react';
import { DndProvider } from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/dist/esm/HTML5toTouch'; // or any other pipeline
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
                <DndProvider options={HTML5toTouch}>
                    <MetsloomadDNDGame />
                </DndProvider>
                <Footer />
            </div>
        )
    }
}
