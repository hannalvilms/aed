import React, { Component } from 'react';
import LinnudGuessPictureGame from "../../Games/GuessPicture/LinnudGuessPictureGame";
import MaismaaGameContent from "../../Content/MaismaaGameContent";
import LoggedNav from '../../Nav/LoggedNav';
import Footer from "../../Footer/Footer";

export default class LinnudGuessPicture extends Component {
    render() {
        return (
            <div id="profile">
                <LoggedNav />
                <MaismaaGameContent />
                <LinnudGuessPictureGame />
                <Footer />
            </div>
        )
    }
}
