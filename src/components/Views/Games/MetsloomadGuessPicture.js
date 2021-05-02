import React, { Component } from 'react';
import MetsloomadGuessPictureGame from "../../Games/GuessPicture/MetsloomadGuessPictureGame";
import MetsloomadGameContent from "../../Content/MetsloomadGameContent";
import LoggedNav from '../../Nav/LoggedNav';
import LoggedFooter from "../../Footer/LoggedFooter";

export default class MetsloomadGuessPicture extends Component {
    render() {
        return (
            <div id="profile">
                <LoggedNav />
                <MetsloomadGameContent />
                <MetsloomadGuessPictureGame />
                <LoggedFooter />
            </div>
        )
    }
}
