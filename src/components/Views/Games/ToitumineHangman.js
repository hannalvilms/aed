import React, { Component } from 'react';
import ToitumineHangmanGame from '../../Games/Hangman/ToitumineHangmanGame';
import ToitumineGameContent from "../../Content/ToitumineGameContent";
import LoggedNav from '../../Nav/LoggedNav';
import Footer from "../../Footer/Footer";

export default class ToitumineHangman extends Component {
    render() {
        return (
            <div id="profile">
                <LoggedNav />
                <ToitumineGameContent />
                <ToitumineHangmanGame />
                <Footer />
            </div>
        )
    }
}
