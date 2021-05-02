import React, { Component } from 'react';
import Navbar from "../../components/Nav/Navbar";
import GameContent from "../../components/Content/MaismaaGameContent";
import LoggedFooter from "../../components/Footer/LoggedFooter";

export default class Game extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <GameContent />
                <LoggedFooter />
            </div>
        )
    }
}