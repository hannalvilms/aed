import React, { Component } from 'react';
import KahepaiksedQuizGame from '../../Games/Quiz/KahepaiksedQuizGame';
import KahepaiksedGameContent from "../../Content/KahepaiksedGameContent";
import LoggedNav from '../../Nav/LoggedNav';
import LoggedFooter from "../../Footer/LoggedFooter";

export default class KahepaiksedQuiz extends Component {
    render() {
        return (
            <div id="profile">
                <LoggedNav />
                <KahepaiksedGameContent />
                <KahepaiksedQuizGame />
                <LoggedFooter />
            </div>
        )
    }
}