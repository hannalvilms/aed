import React, { Component } from 'react';
import { DndProvider } from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/dist/esm/HTML5toTouch'; // or any other pipeline
import ToitumineGameContent from "../../Content/ToitumineGameContent";
import LoggedNav from '../../Nav/LoggedNav';
import LoggedFooter from "../../Footer/LoggedFooter";
import ToitumineDNDGame from "../../Games/DND/ToitumineDNDGame";

export default class ToitumineDND extends Component {
    render() {
        return (
            <div id="profile">
                <LoggedNav />
                <ToitumineGameContent />
                <DndProvider options={HTML5toTouch}>
                    <ToitumineDNDGame />
                </DndProvider>
                <LoggedFooter />
            </div>
        )
    }
}
