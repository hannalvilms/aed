import React, { Component } from 'react';
import $ from 'jquery';
import { words } from "./MetsloomadWords";

export default class Metsloomad extends Component {
   /* componentDidMount() {
        let words = ["üks", "kaks", "kolm", "neli", "viis"];

        $(document).ready(function() {
            arrangeGame();
        });

        function arrangeGame() {
            $.each(words, function(key, item) {
                $(".hint").append("<p>" + item + "</p>");
            });

            for(let i=1; i<12; i++) {
                for(let j=1; j<12 ; j++){
                    $(".letters").append("<div class=individual data-row=" + i + " data-column=" + j + " ></div>");
                }
            }

            placeCorrectLetters(words);
        }

        function placeCorrectLetters(myArr) {
            let positions = ["row", "column", "diagonal"];
            for(let i=0; i<myArr.length; i++) {
                let orientation = positions[
                    Math.floor(Math.random() * positions.length)
                    ];
                let start = Math.floor(Math.random() * $(".individual").length);
                let myRow = $(".individual:eq(" + start +")").data("row");
                let myColumn = $(".individual:eq(" + start +")").data("column");
                let newStart = 0;
                if(orientation === "row") {
                    if((myColumn*1) + myArr[i].length <=12){
                        newStart = start;
                    } else {
                        let newColumn = 12 - myArr[1].length;
                        newStart = $(".individual[data-row=" + myRow +"][data-column=" + newColumn + "]").index();
                    }
                } else if(orientation === "column") {
                    if((myRow*1) + myArr[i].length <=12){
                        newStart = start;
                    } else {
                        let newRow = 12 - myArr[1].length;
                        newStart = $(".individual[data-column=" + myColumn +"][data-row=" + newRow + "]").index();
                    }
                }
            }
        }
    }*/
    constructor(props) {
        super(props);

        this.state = {
            words: ['üks', 'neli', 'seitse', 'kaheksa'],
            i: 1,
            j: 1,
            individual: "individual"
        }
    }

    placeCorrectLetters(myArr) {
        let positions = ["row", "column", "diagonal"];
        for(let i=0; i<myArr.length; i++) {
            let orientation = positions[
                Math.floor(Math.random() * positions.length)
                ];
            let start = Math.floor(Math.random() * $(".individual").length);
            let myRow = $(".individual:eq(" + start + ")").data("row");
            let myColumn = $(".individual:eq(" + start + ")").data("column");
            let newStart = 0;
            if (orientation === "row") {
                if ((myColumn * 1) + myArr[i].length <= 12) {
                    newStart = start;
                } else {
                    let newColumn = 12 - myArr[1].length;
                    newStart = $(".individual[data-row=" + myRow + "][data-column=" + newColumn + "]").index();
                }
            } else if (orientation === "column") {
                if ((myRow * 1) + myArr[i].length <= 12) {
                    newStart = start;
                } else {
                    let newRow = 12 - myArr[1].length;
                    newStart = $(".individual[data-column=" + myColumn + "][data-row=" + newRow + "]").index();
                }
            }
        }
    }

    arrangeGame() {
        let individual = [];
        for(let i=1; i<12; i++) {
            for(let j=1; j<15 ; j++){
                individual.push(<div className="individual" data-row={i} data-column={j}></div>);
            }
        }
        this.placeCorrectLetters(this.state.words);
        return individual;
    };


    wordSearch = (string) => {
        let grid = []
    };


    render() {
        return (
            <div className="container-fluid">
                <div className="container">
                    <div className="row wordSearch">
                        <div className="letters col-lg-8 col-sm-12">
                            {this.arrangeGame()}
                        </div>
                        <div className="hint col-lg-4 col-sm-12">
                            <ul>
                                {this.state.words.map(word => (
                                    <li key={word}>{word}</li>
                                ))}
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
};
