import React, { Component } from 'react';
import KaladGuessPictureGame from "../../Games/GuessPicture/KaladGuessPictureGame";
import KaladGameContent from "../../Content/KaladGameContent";
import LoggedNav from '../../Nav/LoggedNav';
import LoggedFooter from "../../Footer/LoggedFooter";

export default class KaladGuessPicture extends Component {
    render() {
        return (
            <div id="profile">
                <LoggedNav />
                <KaladGameContent />
                <KaladGuessPictureGame />
                <LoggedFooter />
            </div>
        )
    }
}
