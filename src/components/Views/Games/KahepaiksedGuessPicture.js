import React, { Component } from 'react';
import KahepaiksedGuessPictureGame from "../../Games/GuessPicture/KahepaiksedGuessPictureGame";
import KahepaiksedGameContent from "../../Content/KahepaiksedGameContent";
import LoggedNav from '../../Nav/LoggedNav';
import LoggedFooter from "../../Footer/LoggedFooter";

export default class KahepaiksedGuessPicture extends Component {
    render() {
        return (
            <div id="profile">
                <LoggedNav />
                <KahepaiksedGameContent />
                <KahepaiksedGuessPictureGame />
                <LoggedFooter />
            </div>
        )
    }
}
