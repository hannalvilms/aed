import React, { Component } from 'react';
import KaladGuessPictureGame from "../../Games/GuessPicture/KaladGuessPictureGame";
import KaladGameContent from "../../Content/KaladGameContent";
import LoggedNav from '../../Nav/LoggedNav';
import Footer from "../../Footer/Footer";

export default class KaladGuessPicture extends Component {
    render() {
        return (
            <div id="profile">
                <LoggedNav />
                <KaladGameContent />
                <KaladGuessPictureGame />
                <Footer />
            </div>
        )
    }
}
