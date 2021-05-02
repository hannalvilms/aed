import React, { Component } from 'react';
import ValisehitusGuessPictureGame from "../../Games/GuessPicture/ValisehitusGuessPictureGame";
import ValisehitusGameContent from "../../Content/ValisehitusGameContent";
import LoggedNav from '../../Nav/LoggedNav';
import LoggedFooter from "../../Footer/LoggedFooter";

export default class ValisehitusGuessPicture extends Component {
    render() {
        return (
            <div id="profile">
                <LoggedNav />
                <ValisehitusGameContent />
                <ValisehitusGuessPictureGame />
                <LoggedFooter />
            </div>
        )
    }
}
