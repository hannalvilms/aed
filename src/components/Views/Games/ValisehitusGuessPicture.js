import React, { Component } from 'react';
import ValisehitusGuessPictureGame from "../../Games/GuessPicture/ValisehitusGuessPictureGame";
import ValisehitusGameContent from "../../Content/ValisehitusGameContent";
import LoggedNav from '../../Nav/LoggedNav';
import Footer from "../../Footer/Footer";

export default class ValisehitusGuessPicture extends Component {
    render() {
        return (
            <div id="profile">
                <LoggedNav />
                <ValisehitusGameContent />
                <ValisehitusGuessPictureGame />
                <Footer />
            </div>
        )
    }
}
