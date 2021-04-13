import React, { Component } from 'react';
import KahepaiksedGuessPictureGame from "../../Games/GuessPicture/KahepaiksedGuessPictureGame";
import KahepaiksedGameContent from "../../Content/KahepaiksedGameContent";
import LoggedNav from '../../Nav/LoggedNav';
import Footer from "../../Footer/Footer";

export default class KahepaiksedGuessPicture extends Component {
    render() {
        return (
            <div id="profile">
                <LoggedNav />
                <KahepaiksedGameContent />
                <KahepaiksedGuessPictureGame />
                <Footer />
            </div>
        )
    }
}
