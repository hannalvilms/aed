import React, { Component } from 'react';
import AdminContent from '../Content/AdminContent';
import LoggedNav from '../Nav/LoggedNav';
import Footer from "../Footer/Footer";
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router-dom';

export default class Admin extends Component {
    render() {
        return (
            <div id="profile">
                <LoggedNav />
                <AdminContent />
                <Footer />
            </div>
        )
    }
}