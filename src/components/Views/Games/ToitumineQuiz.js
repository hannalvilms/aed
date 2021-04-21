import React, { Component } from 'react';
import ToitumineQuizGame from '../../Games/Quiz/ToitumineQuizGame';
import ToitumineGameContent from "../../Content/ToitumineGameContent";
import LoggedNav from '../../Nav/LoggedNav';
import Footer from "../../Footer/Footer";

export default class ToitumineQuiz extends Component {
    render() {
        return (
            <div id="profile">
                <LoggedNav />
                <ToitumineGameContent />
                <ToitumineQuizGame />
                <Footer />
            </div>
        )
    }
}