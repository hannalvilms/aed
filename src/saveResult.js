import axios from "axios";
import {API} from "./url";

export function saveResult(result, newGrade, gameId) {
    let user = JSON.parse(localStorage.getItem('appState'))
    let token = user.user.token;
    const headers = {
        'Content-Type' : 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Accept' : 'application/json',
        'Authorization': `Bearer ${token}`
    }
    const data = new FormData();
    data.append('game_id', gameId);
    data.append('score', result);
    data.append('grade', newGrade);
    axios.post(API + `/api/add-result`, data, {
        headers: headers,
        }
    );
}