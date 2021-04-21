import React, { Component } from 'react';
import VeeloomadQuizGame from '../../Games/Quiz/VeeloomadQuizGame';
import VeeloomadGameContent from "../../Content/VeeloomadGameContent";
import LoggedNav from '../../Nav/LoggedNav';
import Footer from "../../Footer/Footer";

export default class VeeloomadQuiz extends Component {
    render() {
        return (
            <div id="profile">
                <LoggedNav />
                <VeeloomadGameContent />
                <VeeloomadQuizGame />
                <Footer />
            </div>
        )
    }
}