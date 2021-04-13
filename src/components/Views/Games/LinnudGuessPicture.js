import React, { Component } from 'react';
import LinnudGuessPictureGame from "../../Games/GuessPicture/LinnudGuessPictureGame";
import LinnudGameContent from "../../Content/LinnudGameContent";
import LoggedNav from '../../Nav/LoggedNav';
import Footer from "../../Footer/Footer";

export default class LinnudGuessPicture extends Component {
    render() {
        return (
            <div id="profile">
                <LoggedNav />
                <LinnudGameContent />
                <LinnudGuessPictureGame />
                <Footer />
            </div>
        )
    }
}
