import React, { Component } from 'react';
import { DndProvider } from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/dist/esm/HTML5toTouch'; // or any other pipeline
import VeeloomadGameContent from "../../Content/VeeloomadGameContent";
import LoggedNav from '../../Nav/LoggedNav';
import Footer from "../../Footer/Footer";
import VeeloomadDNDGame from "../../Games/DND/VeeloomadDNDGame";

export default class VeeloomadDND extends Component {
    render() {
        return (
            <div id="profile">
                <LoggedNav />
                <VeeloomadGameContent />
                <DndProvider options={HTML5toTouch}>
                    <VeeloomadDNDGame />
                </DndProvider>
                <Footer />
            </div>
        )
    }
}
