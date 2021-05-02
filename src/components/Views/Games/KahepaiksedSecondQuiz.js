import React, { Component } from 'react';
import KahepaiksedSecondQuizGame from '../../Games/Quiz/KahepaiksedSecondQuizGame';
import KahepaiksedGameContent from "../../Content/KahepaiksedGameContent";
import LoggedNav from '../../Nav/LoggedNav';
import LoggedFooter from "../../Footer/LoggedFooter";

export default class KahepaiksedSecondQuiz extends Component {
    render() {
        return (
            <div id="profile">
                <LoggedNav />
                <KahepaiksedGameContent />
                <KahepaiksedSecondQuizGame />
                <LoggedFooter />
            </div>
        )
    }
}