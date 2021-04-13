import React, { Component } from 'react';
import { DndProvider } from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/dist/esm/HTML5toTouch'; // or any other pipeline
import KoduloomadDNDGame from '../../Games/DND/KoduloomadDNDGame';
import KoduloomadGameContent from "../../Content/KoduloomadGameContent";
import LoggedNav from '../../Nav/LoggedNav';
import Footer from "../../Footer/Footer";

export default class MetsloomadDND extends Component {
    render() {
        return (
            <div id="profile">
                <LoggedNav />
                <KoduloomadGameContent />
                <DndProvider options={HTML5toTouch}>
                    <KoduloomadDNDGame />
                </DndProvider>
                <Footer />
            </div>
        )
    }
}
