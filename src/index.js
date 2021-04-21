import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
//Views
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
import PrivacyPolicy from "./components/Views/PrivacyPolicy";
import Conditions from "./components/Views/Conditions";
import reportWebVitals from './reportWebVitals';

//Games
import Game from "./components/Views/Game";
import MaismaaMemory from "./components/Views/Games/MaismaaMemory";
import LinnudGuessPicture from "./components/Views/Games/LinnudGuessPicture";
import LinnudHangman from "./components/Views/Games/LinnudHangman";
import MetsloomadDND from "./components/Views/Games/MetsloomadDND";
import KoduloomadDND from './components/Views/Games/KoduloomadDND';
import MaismaaloomadDND from './components/Views/Games/MaismaaloomadDND';
import VeeloomadDND from './components/Views/Games/VeeloomadDND';
import ToitumineDND from "./components/Views/Games/ToitumineDND";
import KaladGuessPicture from "./components/Views/Games/KaladGuessPicture";
import KoduloomadGuessPicture from "./components/Views/Games/KoduloomadGuessPicture";
import MaismaaGuessPicture from "./components/Views/Games/MaismaaGuessPicture";
import LinnudGuessSound from "./components/Views/Games/LinnudGuessSound";
import KahepaiksedGuessPicture from "./components/Views/Games/KahepaiksedGuessPicture";
import MetsloomadGuessPicture from "./components/Views/Games/MetsloomadGuessPicture";
import ValisehitusGuessPicture from "./components/Views/Games/ValisehitusGuessPicture";
import VeeloomadGuessPicture from "./components/Views/Games/VeeloomadGuessPicture";
import KoduloomadHangman from "./components/Views/Games/KoduloomadHangman";
import ToitumineHangman from "./components/Views/Games/ToitumineHangman";
import KaladMemory from "./components/Views/Games/KaladMemory";
import KoduloomadMemory from "./components/Views/Games/KoduloomadMemory";
import LinnudMemory from "./components/Views/Games/LinnudMemory";
import MetsloomadMemory from "./components/Views/Games/MetsloomadMemory";
import KahepaiksedSecondQuiz from "./components/Views/Games/KahepaiksedSecondQuiz";
import KahepaiksedQuiz from "./components/Views/Games/KahepaiksedQuiz";
import KaladQuiz from "./components/Views/Games/KaladQuiz";
import ToitumineQuiz from "./components/Views/Games/ToitumineQuiz";
import ValisehitusQuiz from "./components/Views/Games/ValisehitusQuiz";
import VeeloomadQuiz from "./components/Views/Games/VeeloomadQuiz";

//Styles
import '../src/styles/style.css';
import '../src/styles/style.css';
import '../src/styles/hamburgers.css';
import '../src/styles/hamburgers.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import {PrivateRoute} from "./PrivateRoute";


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
       <PrivateRoute path = "/maismaaloomad" component={Maismaaloomad}/>
       <Route path = "/metsloomad" component={Metsloomad}/>
       <Route path = "/register" component={Register} />
       <Route path = "/toitumine" component={Toitumine}/>
       <Route path = "/valisehitus" component={Valisehitus} />
       <Route path = "/veeloomad" component={Veeloomad}/>
       <Route path = "/gamepage" component={Game}/>

       <Route path = "/maodSisalikudQuiz" component={KahepaiksedSecondQuiz} />
       <Route path = "/kahepaiksedQuiz" component={KahepaiksedQuiz} />
       <Route path = "/kaladQuiz" component={KaladQuiz} />
       <Route path = "/toitumineQuiz" component={ToitumineQuiz} />
       <Route path = "/valisehitusQuiz" component={ValisehitusQuiz} />
       <Route path = "/veeloomadQuiz" component={VeeloomadQuiz} />

       <Route path = "/memoryGame" component={MaismaaMemory}/>
       <Route path = "/kaladMemory" component={KaladMemory}/>
       <Route path = "/koduloomadMemory" component={KoduloomadMemory}/>
       <Route path = "/linnudMemory" component={LinnudMemory}/>
       <Route path = "/metsloomadMemory" component={MetsloomadMemory}/>

       <Route path = "/linnudGuessPicture" component={LinnudGuessPicture} />
       <Route path = "/kahepaiksedGuessPicture" component={KahepaiksedGuessPicture} />
       <Route path = "/kaladGuessPicture" component={KaladGuessPicture}/>
       <Route path = "/koduloomadGuessPicture" component={KoduloomadGuessPicture}/>
       <Route path = "/maismaaGuessPicture" component={MaismaaGuessPicture}/>
       <Route path = "/metsloomadGuessPicture" component={MetsloomadGuessPicture}/>
       <Route path = "/valisehitusGuessPicture" component={ValisehitusGuessPicture}/>
       <Route path = "/veeloomadGuessPicture" component={VeeloomadGuessPicture}/>

       <Route path = "/linnudHangman" component={LinnudHangman} />
       <Route path = "/koduloomadHangman" component={KoduloomadHangman}/>
       <Route path = "/toitumineHangman" component={ToitumineHangman}/>

       <Route path = "/koduloomadDND" component={KoduloomadDND} />
       <Route path = "/metsloomadDND" component={MetsloomadDND} />
       <Route path = "/maismaaloomadDND" component={MaismaaloomadDND} />
       <Route path = "/veeloomadDND" component={VeeloomadDND} />
       <Route path = "/toitumineDND" component={ToitumineDND} />

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
