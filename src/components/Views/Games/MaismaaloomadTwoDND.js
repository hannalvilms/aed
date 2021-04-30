import React, { Component } from 'react';
import { DndProvider } from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/dist/esm/HTML5toTouch'; // or any other pipeline
import MaismaaloomadTwoDNDGame from '../../Games/DND/MaismaaloomadTwoDNDGame';
import MaismaaGameContent from "../../Content/MaismaaGameContent";
import LoggedNav from '../../Nav/LoggedNav';
import Footer from "../../Footer/Footer";

export default class MaismaaloomadTwoDND extends Component {
    render() {
        return (
            <div id="profile">
                <LoggedNav />
                <MaismaaGameContent />
                <DndProvider options={HTML5toTouch}>
                    <MaismaaloomadTwoDNDGame />
                </DndProvider>
                <Footer />
            </div>
        )
    }
}
