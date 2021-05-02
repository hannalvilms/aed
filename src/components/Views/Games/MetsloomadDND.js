import React, { Component } from 'react';
import { DndProvider } from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/dist/esm/HTML5toTouch'; // or any other pipeline
import MetsloomadDNDGame from '../../Games/DND/MetsloomadDNDGame';
import MetsloomadGameContent from "../../Content/MetsloomadGameContent";
import LoggedNav from '../../Nav/LoggedNav';
import LoggedFooter from "../../Footer/LoggedFooter";

export default class MetsloomadDND extends Component {
    render() {
        return (
            <div id="profile">
                <LoggedNav />
                <MetsloomadGameContent />
                <DndProvider options={HTML5toTouch}>
                    <MetsloomadDNDGame />
                </DndProvider>
                <LoggedFooter />
            </div>
        )
    }
}
