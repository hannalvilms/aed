import React from 'react';
let value = JSON.parse(localStorage.getItem('appState'));
export function isAuthenticated() {
    console.log(value)
    console.log(value.isLoggedIn)

    /*if (value !== null && value.isLoggedIn !== null){
        console.log('k,s')
        return true;
    } else {
        console.log('k,ssss')
        return false;
    }
*/
   try {
        if (value.isLoggedIn) {
            return value.isLoggedIn;
            }
        } catch (err) {
            console.log(err)
            return false;
        }
}
