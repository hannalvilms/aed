import React, { Component } from 'react';
import { DndProvider } from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/dist/esm/HTML5toTouch'; // or any other pipeline
import MaismaaloomadDNDGame from '../../Games/DND/MaismaaloomadDNDGame';
import MaismaaGameContent from "../../Content/MaismaaGameContent";
import LoggedNav from '../../Nav/LoggedNav';
import LoggedFooter from "../../Footer/LoggedFooter";

export default class MaismaaloomadDND extends Component {
    render() {
        return (
            <div id="profile">
                <LoggedNav />
                <MaismaaGameContent />
                <DndProvider options={HTML5toTouch}>
                    <MaismaaloomadDNDGame />
                </DndProvider>
                <LoggedFooter />
            </div>
        )
    }
}
