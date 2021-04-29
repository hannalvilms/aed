import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import {PrivateRoute} from "./PrivateRoute";

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

//Games
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

ReactDOM.render(
   <BrowserRouter>
       <Route path = "/loggedMobilenav" component ={LoggedMobilenav}/>
       <PrivateRoute path="/profile" component={Profile}/>
       <PrivateRoute path = "/profileData" component = {ProfileData}/>
       <Route path = "/frontpage" component={Frontpage}/>
       <PrivateRoute path = "/loggedFrontpage" component={LoggedFrontpage}/>
       <PrivateRoute path = "/admin" component={Admin}/>
       <Route path = "/contact" component={Contact}/>
       <Route path = "/error" component={Error}/>
       <PrivateRoute path = "/kahepaiksed" component={Kahepaiksed}/>
       <PrivateRoute path = "/kalad" component={Kalad}/>
       <PrivateRoute path = "/koduloomad" component={Koduloomad}/>
       <PrivateRoute path = "/linnud" component={Linnud} />
       <Route path = "/login" component={Login}/>
       <Route path = "/maintenance" component={Maintenance}/>
       <PrivateRoute path = "/maismaaloomad" component={Maismaaloomad}/>
       <PrivateRoute path = "/metsloomad" component={Metsloomad}/>
       <Route path = "/register" component={Register} />
       <PrivateRoute path = "/toitumine" component={Toitumine}/>
       <PrivateRoute path = "/valisehitus" component={Valisehitus} />
       <PrivateRoute path = "/veeloomad" component={Veeloomad}/>

       <PrivateRoute path = "/maodSisalikudQuiz" component={KahepaiksedSecondQuiz} />
       <PrivateRoute path = "/kahepaiksedQuiz" component={KahepaiksedQuiz} />
       <PrivateRoute path = "/kaladQuiz" component={KaladQuiz} />
       <PrivateRoute path = "/toitumineQuiz" component={ToitumineQuiz} />
       <PrivateRoute path = "/valisehitusQuiz" component={ValisehitusQuiz} />
       <PrivateRoute path = "/veeloomadQuiz" component={VeeloomadQuiz} />

       <PrivateRoute path = "/memoryGame" component={MaismaaMemory}/>
       <PrivateRoute path = "/kaladMemory" component={KaladMemory}/>
       <PrivateRoute path = "/koduloomadMemory" component={KoduloomadMemory}/>
       <PrivateRoute path = "/linnudMemory" component={LinnudMemory}/>
       <PrivateRoute path = "/metsloomadMemory" component={MetsloomadMemory}/>

       <PrivateRoute path = "/linnudGuessPicture" component={LinnudGuessPicture} />
       <PrivateRoute path = "/kahepaiksedGuessPicture" component={KahepaiksedGuessPicture} />
       <PrivateRoute path = "/kaladGuessPicture" component={KaladGuessPicture}/>
       <PrivateRoute path = "/koduloomadGuessPicture" component={KoduloomadGuessPicture}/>
       <PrivateRoute path = "/maismaaGuessPicture" component={MaismaaGuessPicture}/>
       <PrivateRoute path = "/metsloomadGuessPicture" component={MetsloomadGuessPicture}/>
       <PrivateRoute path = "/valisehitusGuessPicture" component={ValisehitusGuessPicture}/>
       <PrivateRoute path = "/veeloomadGuessPicture" component={VeeloomadGuessPicture}/>

       <PrivateRoute path = "/linnudHangman" component={LinnudHangman} />
       <PrivateRoute path = "/koduloomadHangman" component={KoduloomadHangman}/>
       <PrivateRoute path = "/toitumineHangman" component={ToitumineHangman}/>

       <PrivateRoute path = "/koduloomadDND" component={KoduloomadDND} />
       <PrivateRoute path = "/metsloomadDND" component={MetsloomadDND} />
       <PrivateRoute path = "/maismaaloomadDND" component={MaismaaloomadDND} />
       <PrivateRoute path = "/veeloomadDND" component={VeeloomadDND} />
       <PrivateRoute path = "/toitumineDND" component={ToitumineDND} />

       <Route path = "/privacyPolicy" component={PrivacyPolicy} />
       <Route path = "/conditions" component={Conditions} />
       <PrivateRoute path = "/guessSound" component={LinnudGuessSound} />
   </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
