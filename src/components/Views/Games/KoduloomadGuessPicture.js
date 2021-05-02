import React, { Component } from 'react';
import KoduloomadGuessPictureGame from "../../Games/GuessPicture/KoduloomadGuessPictureGame";
import KoduloomadGameContent from "../../Content/KoduloomadGameContent";
import LoggedNav from '../../Nav/LoggedNav';
import LoggedFooter from "../../Footer/LoggedFooter";

export default class KoduloomadGuessPicture extends Component {
    render() {
        return (
            <div id="profile">
                <LoggedNav />
                <KoduloomadGameContent />
                <KoduloomadGuessPictureGame />
                <LoggedFooter />
            </div>
        )
    }
}
