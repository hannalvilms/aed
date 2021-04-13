import React, { Component } from 'react';
import MaismaaGuessPictureGame from "../../Games/GuessPicture/MaismaaGuessPictureGame";
import MaismaaGameContent from "../../Content/MaismaaGameContent";
import LoggedNav from '../../Nav/LoggedNav';
import Footer from "../../Footer/Footer";

export default class MaismaaGuessPicture extends Component {
    render() {
        return (
            <div id="profile">
                <LoggedNav />
                <MaismaaGameContent />
                <MaismaaGuessPictureGame />
                <Footer />
            </div>
        )
    }
}
