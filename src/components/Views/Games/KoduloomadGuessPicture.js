import React, { Component } from 'react';
import KoduloomadGuessPictureGame from "../../Games/GuessPicture/KoduloomadGuessPictureGame";
import KoduloomadGameContent from "../../Content/KoduloomadGameContent";
import LoggedNav from '../../Nav/LoggedNav';
import Footer from "../../Footer/Footer";

export default class KoduloomadGuessPicture extends Component {
    render() {
        return (
            <div id="profile">
                <LoggedNav />
                <KoduloomadGameContent />
                <KoduloomadGuessPictureGame />
                <Footer />
            </div>
        )
    }
}
