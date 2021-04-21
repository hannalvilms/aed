import React, { Component } from 'react';
import KaladQuizGame from '../../Games/Quiz/KaladQuizGame';
import KaladGameContent from "../../Content/KaladGameContent";
import LoggedNav from '../../Nav/LoggedNav';
import Footer from "../../Footer/Footer";

export default class KaladQuiz extends Component {
    render() {
        return (
            <div id="profile">
                <LoggedNav />
                <KaladGameContent />
                <KaladQuizGame />
                <Footer />
            </div>
        )
    }
}