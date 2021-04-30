import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Trees from "../../images/trees.jpg";
import One from "../../images/one-star.png";
import axios from "axios";


export default class ProfileContent extends Component {

    constructor(props){
        super(props);
        this.state = {
            reviews : [],
        };
    }

    async componentDidMount() {
        let user = JSON.parse(localStorage.getItem('appState'))
        let token = user.user.token;
        const res = await axios.get(`https://aed.academy/aed-back/api/results`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        if (res) {
            const posts = res.data.data;
            this.setState({
                posts: [...posts]
            });
        }
    }
    renderPost = () => {

        return this.state.posts
            ? this.state.posts.map(data => (
                <div className="col-lg-6 col-md-6 col-sm-10 results" key={data.id}>
                    <img src={Trees} alt="trees"/>
                    <div className="overlay">
                        <h4>{data.game_id}</h4>
                        <h6>Maismaaloomad</h6>
                        <h6>Tulemus: {data.score}</h6>
                        <img src={One} className="img-result" alt="score"/>
                    </div>
                </div>
            ))
            : "";
    };

    render() {
        return (
            <div className="container-fluid profile">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-12 profile-menu my-auto">
                            <p>Tulemused</p>
                            <Link to="/profileData">Andmed</Link>
                        </div>
                        <div className="row profile-results col-lg-8 col-sm-12"> {this.renderPost()}</div>
                    </div>
                </div>
            </div>
        )
    }
}
