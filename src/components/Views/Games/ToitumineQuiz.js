import React, { Component } from 'react';
import ToitumineQuizGame from '../../Games/Quiz/ToitumineQuizGame';
import ToitumineGameContent from "../../Content/ToitumineGameContent";
import LoggedNav from '../../Nav/LoggedNav';
import LoggedFooter from "../../Footer/LoggedFooter";

export default class ToitumineQuiz extends Component {
    render() {
        return (
            <div id="profile">
                <LoggedNav />
                <ToitumineGameContent />
                <ToitumineQuizGame />
                <LoggedFooter />
            </div>
        )
    }
}