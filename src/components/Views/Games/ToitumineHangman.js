import React, { Component } from 'react';
import ToitumineHangmanGame from '../../Games/Hangman/ToitumineHangmanGame';
import ToitumineGameContent from "../../Content/ToitumineGameContent";
import LoggedNav from '../../Nav/LoggedNav';
import LoggedFooter from "../../Footer/LoggedFooter";

export default class ToitumineHangman extends Component {
    render() {
        return (
            <div id="profile">
                <LoggedNav />
                <ToitumineGameContent />
                <ToitumineHangmanGame />
                <LoggedFooter />
            </div>
        )
    }
}
