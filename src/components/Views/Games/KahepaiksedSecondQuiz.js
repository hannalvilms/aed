import React, { Component } from 'react';
import KahepaiksedSecondQuizGame from '../../Games/Quiz/KahepaiksedSecondQuizGame';
import KahepaiksedGameContent from "../../Content/KahepaiksedGameContent";
import LoggedNav from '../../Nav/LoggedNav';
import Footer from "../../Footer/Footer";

export default class KahepaiksedSecondQuiz extends Component {
    render() {
        return (
            <div id="profile">
                <LoggedNav />
                <KahepaiksedGameContent />
                <KahepaiksedSecondQuizGame />
                <Footer />
            </div>
        )
    }
}