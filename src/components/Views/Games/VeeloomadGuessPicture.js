import React, { Component } from 'react';
import VeeloomadGuessPictureGame from "../../Games/GuessPicture/VeeloomadGuessPictureGame";
import VeeloomadGameContent from "../../Content/VeeloomadGameContent";
import LoggedNav from '../../Nav/LoggedNav';
import LoggedFooter from "../../Footer/LoggedFooter";

export default class VeeloomadGuessPicture extends Component {
    render() {
        return (
            <div id="profile">
                <LoggedNav />
                <VeeloomadGameContent />
                <VeeloomadGuessPictureGame />
                <LoggedFooter />
            </div>
        )
    }
}
