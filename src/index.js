import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import {PrivateRoute} from "./PrivateRoute";

//Views
import Frontpage from './components/Views/Frontpage';
import AdminUsers from "./components/Views/Admin/AdminUsers";
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
import MaismaaloomadTwoDND from "./components/Views/Games/MaismaaloomadTwoDND";
import ConditionsNA from "./components/Views/ConditionsNA";
import ContactNA from "./components/Views/ContactNA";
import PrivacyPolicyNA from "./components/Views/PrivacyPolicyNA";

ReactDOM.render(
   <BrowserRouter>

       <PrivateRoute path = "/adminusers" component={AdminUsers}/>

       <Route path = "/loggedMobilenav" component ={LoggedMobilenav}/>
       <PrivateRoute path="/tulemused" component={Profile}/>
       <PrivateRoute path = "/andmed" component = {ProfileData}/>
       <Route path = "/avaleht" component={Frontpage}/>
       <PrivateRoute path = "/avaleht-logitud" component={LoggedFrontpage}/>
       <Route path = "/error" component={Error}/>
       <PrivateRoute path = "/kahepaiksed" component={Kahepaiksed}/>
       <PrivateRoute path = "/kalad" component={Kalad}/>
       <PrivateRoute path = "/koduloomad" component={Koduloomad}/>
       <PrivateRoute path = "/linnud" component={Linnud} />
       <Route path = "/login" component={Login}/>
       <Route path = "/maintenance" component={Maintenance}/>
       <PrivateRoute path = "/maismaaloomad" component={Maismaaloomad}/>
       <PrivateRoute path = "/metsloomad" component={Metsloomad}/>
       <Route path = "/registreeri" component={Register} />
       <PrivateRoute path = "/toitumine" component={Toitumine}/>
       <PrivateRoute path = "/valisehitus" component={Valisehitus} />
       <PrivateRoute path = "/veeloomad" component={Veeloomad}/>

       <PrivateRoute path = "/maod-sisalikud-test" component={KahepaiksedSecondQuiz} />
       <PrivateRoute path = "/kahepaiksed-test" component={KahepaiksedQuiz} />
       <PrivateRoute path = "/kalad-test" component={KaladQuiz} />
       <PrivateRoute path = "/toitumine-test" component={ToitumineQuiz} />
       <PrivateRoute path = "/valisehitus-test" component={ValisehitusQuiz} />
       <PrivateRoute path = "/veeloomad-test" component={VeeloomadQuiz} />

       <PrivateRoute path = "/maismaaloomad-memory" component={MaismaaMemory}/>
       <PrivateRoute path = "/kalad-memory" component={KaladMemory}/>
       <PrivateRoute path = "/koduloomad-memory" component={KoduloomadMemory}/>
       <PrivateRoute path = "/linnud-memory" component={LinnudMemory}/>
       <PrivateRoute path = "/metsloomad-memory" component={MetsloomadMemory}/>

       <PrivateRoute path = "/linnud-arva-pilt" component={LinnudGuessPicture} />
       <PrivateRoute path = "/kahepaiksed-arva-pilt" component={KahepaiksedGuessPicture} />
       <PrivateRoute path = "/kalad-arva-pilt" component={KaladGuessPicture}/>
       <PrivateRoute path = "/koduloomad-arva-pilt" component={KoduloomadGuessPicture}/>
       <PrivateRoute path = "/maismaaloomad-arva-pilt" component={MaismaaGuessPicture}/>
       <PrivateRoute path = "/metsloomad-arva-pilt" component={MetsloomadGuessPicture}/>
       <PrivateRoute path = "/valisehitus-arva-pilt" component={ValisehitusGuessPicture}/>
       <PrivateRoute path = "/veeloomad-arva-pilt" component={VeeloomadGuessPicture}/>

       <PrivateRoute path = "/linnud-poomine" component={LinnudHangman} />
       <PrivateRoute path = "/koduloomad-poomine" component={KoduloomadHangman}/>
       <PrivateRoute path = "/toitumine-poomine" component={ToitumineHangman}/>

       <PrivateRoute path = "/koduloomad-lohistamine" component={KoduloomadDND} />
       <PrivateRoute path = "/metsloomad-lohistamine" component={MetsloomadDND} />
       <PrivateRoute path = "/maismaaloomad-lohistamine" component={MaismaaloomadDND} />
       <PrivateRoute path = "/maismaaloomad-lohistamine-kaks" component={MaismaaloomadTwoDND} />
       <PrivateRoute path = "/veeloomad-lohistamine" component={VeeloomadDND} />
       <PrivateRoute path = "/toitumine-lohistamine" component={ToitumineDND} />

       <PrivateRoute path = "/linnud-arva-heli" component={LinnudGuessSound} />

       <Route path = "/privaatsuspoliitika" component={PrivacyPolicyNA} />
       <Route path = "/tingimused" component={ConditionsNA} />
       <Route path = "/kontakt" component={ContactNA}/>
       <PrivateRoute path = "/privaatsuspoliitika-logitud" component={PrivacyPolicy}/>
       <PrivateRoute path = "/tingimused-logitud" component={Conditions}/>
       <PrivateRoute path = "/kontakt-logitud" component={Contact}/>

   </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
