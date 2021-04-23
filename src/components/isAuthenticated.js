import React from 'react';
let value = JSON.parse(localStorage.getItem('appState'));

export function isAuthenticated() {
   /* if (value !== null && value.isLoggedIn !== null){
        console.log('k,s')
        return value.isLoggedIn;
    } else {
        console.log('k,ssss')
        return true;
    }*/

    try {
        if (value.isLoggedIn) {
            console.log('k,s')
            return value.isLoggedIn;
        }
    } catch (err) {
        console.log(err)
        return false;
    }
}
