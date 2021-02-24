import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
//Views
import App from './App';
import Frontpage from './components/Views/Frontpage';
import Admin from "./components/Views/Admin";
import LoggedFrontpage from "./components/Views/LoggedFrontpage";
import LoggedMobilenav from "./components/Nav/LoggedMobilenav";
import ProfileData from "./components/Views/ProfileData";
import Profile from "./components/Views/Profile";
import Contact from "./components/Views/Contact";
import Kahepaiksed from "./components/Views/Kahepaiksed";
import Error from "./components/Views/Error";
import Kalad from "./components/Views/Kalad";
import Koduloomad from "./components/Views/Koduloomad";
import Linnud from "./components/Views/Linnud";
import Login from "./components/Views/Login";
import Maintenance from "./components/Views/Maintenance";
import Maismaaloomad from "./components/Views/Maismaaloomad";
import Metsloomad from "./components/Views/Metsloomad";
import Register from "./components/Views/Register";
import Toitumine from "./components/Views/Toitumine";
import Valisehitus from "./components/Views/Valisehitus";
import Veeloomad from "./components/Views/Veeloomad";
import reportWebVitals from './reportWebVitals';

//Games
import Game from "./components/Views/Game";
import MaismaaMemory from "./components/Views/Games/MaismaaMemory";
import MaismaaQuiz from './components/Views/Games/MaismaaQuiz';
import MetsloomadWordSearch from "./components/Games/WordSearch/MetsloomadWordSearch";
import LinnudGuessPicture from "./components/Views/Games/LinnudGuessPicture";
import LinnudHangman from "./components/Views/Games/LinnudHangman";
import MetsloomadDND from "./components/Views/Games/MetsloomadDND";

//Styles
import '../src/styles/style.css';
import '../src/styles/style.css';
import '../src/styles/hamburgers.css';
import '../src/styles/hamburgers.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import PrivacyPolicy from "./components/Views/PrivacyPolicy";
import Conditions from "./components/Views/Conditions";
import LinnudGuessSound from "./components/Views/Games/LinnudGuessSound";

ReactDOM.render(
   <BrowserRouter>
       <Route path = "/loggedMobilenav" component ={LoggedMobilenav}/>
       <Route path="/profile" component={Profile}/>
       <Route path = "/profileData" component = {ProfileData}/>
       <Route path = "/frontpage" component={Frontpage}/>
       <Route path = "/loggedFrontpage" component={LoggedFrontpage}/>
       <Route path = "/admin" component={Admin}/>
       <Route path = "/contact" component={Contact}/>
       <Route path = "/error" component={Error}/>
       <Route path = "/kahepaiksed" component={Kahepaiksed}/>
       <Route path = "/kalad" component={Kalad}/>
       <Route path = "/koduloomad" component={Koduloomad}/>
       <Route path = "/linnud" component={Linnud} />
       <Route path = "/login" component={Login}/>
       <Route path = "/maintenance" component={Maintenance}/>
       <Route path = "/maismaaloomad" component={Maismaaloomad}/>
       <Route path = "/metsloomad" component={Metsloomad}/>
       <Route path = "/register" component={Register} />
       <Route path = "/toitumine" component={Toitumine}/>
       <Route path = "/valisehitus" component={Valisehitus} />
       <Route path = "/veeloomad" component={Veeloomad}/>
       <Route path = "/gamepage" component={Game}/>
       <Route path = "/maismaaQuiz" component={MaismaaQuiz}/>
       <Route path = "/memoryGame" component={MaismaaMemory}/>
       <Route path = "/wordSearch" component={MetsloomadWordSearch}/>
       <Route path = "/guessPicture" component={LinnudGuessPicture} />
       <Route path = "/linnudHangman" component={LinnudHangman} />
       <Route path = "/dnd" component={MetsloomadDND} />
       <Route path = "/privacyPolicy" component={PrivacyPolicy} />
       <Route path = "/conditions" component={Conditions} />
       <Route path = "/guessSound" component={LinnudGuessSound} />
   </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
