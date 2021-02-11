import React, { Component } from 'react';
import Navbar from "../../components/Nav/Navbar";
import GameContent from "../../components/Content/MaismaaGameContent";
import Footer from "../../components/Footer/Footer";

export default class Game extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <GameContent />
                <Footer />
            </div>
        )
    }
}