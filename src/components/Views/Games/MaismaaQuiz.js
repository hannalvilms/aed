import React, { Component } from 'react';
import MaismaaQuizGame from '../../Games/Quiz/MaismaaQuizGame';
import MaismaaGameContent from "../../Content/MaismaaGameContent";
import LoggedNav from '../../Nav/LoggedNav';
import Footer from "../../Footer/Footer";

export default class MaismaaQuiz extends Component {
    render() {
        return (
            <div id="profile">
                <LoggedNav />
                <MaismaaGameContent />
                <MaismaaQuizGame />
                <Footer />
            </div>
        )
    }
}