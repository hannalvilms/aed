// eslint-disable-next-line
import React from 'react';
let value = JSON.parse(localStorage.getItem('appState'));
export function isAuthenticated() {
   try {
        if (value.isLoggedIn) {
            return value.isLoggedIn;
            }
        } catch (err) {
            return false;
        }
}
