import React, { Component } from 'react';
import ValisehitusQuizGame from '../../Games/Quiz/ValisehitusQuizGame';
import ValisehitusGameContent from "../../Content/ValisehitusGameContent";
import LoggedNav from '../../Nav/LoggedNav';
import Footer from "../../Footer/Footer";

export default class ValisehitusQuiz extends Component {
    render() {
        return (
            <div id="profile">
                <LoggedNav />
                <ValisehitusGameContent />
                <ValisehitusQuizGame />
                <Footer />
            </div>
        )
    }
}