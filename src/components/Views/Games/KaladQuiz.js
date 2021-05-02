import React, { Component } from 'react';
import KaladQuizGame from '../../Games/Quiz/KaladQuizGame';
import KaladGameContent from "../../Content/KaladGameContent";
import LoggedNav from '../../Nav/LoggedNav';
import LoggedFooter from "../../Footer/LoggedFooter";

export default class KaladQuiz extends Component {
    render() {
        return (
            <div id="profile">
                <LoggedNav />
                <KaladGameContent />
                <KaladQuizGame />
                <LoggedFooter />
            </div>
        )
    }
}