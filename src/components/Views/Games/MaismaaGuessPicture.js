import React, { Component } from 'react';
import MaismaaGuessPictureGame from "../../Games/GuessPicture/MaismaaGuessPictureGame";
import MaismaaGameContent from "../../Content/MaismaaGameContent";
import LoggedNav from '../../Nav/LoggedNav';
import LoggedFooter from "../../Footer/LoggedFooter";

export default class MaismaaGuessPicture extends Component {
    render() {
        return (
            <div id="profile">
                <LoggedNav />
                <MaismaaGameContent />
                <MaismaaGuessPictureGame />
                <LoggedFooter />
            </div>
        )
    }
}
