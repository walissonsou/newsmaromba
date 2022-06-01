import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import { React } from 'react';

import Navbar from './components/pages/Navbar/Navbar'
import Home from './components/pages/Navbar/AssetsNavBar/Home'
import Suplementation from './components/pages/Navbar/AssetsNavBar/Suplementation'
import NextEvents from './components/pages/Navbar/AssetsNavBar/NextEvents'
import Events from './components/pages/Navbar/AssetsNavBar/Events'
import SignUp from './components/pages/Navbar/AssetsNavBar/SignUp'
import International from './components/pages/Navbar/AssetsNavBar/International'
import National from './components/pages/Navbar/AssetsNavBar/National'
import WhoWere from './components/pages/Navbar/AssetsNavBar/WhoWere'
import Interview from './components/pages/Navbar/AssetsNavBar/Interview'
import ImageSlider from './components/Carrousel/ImageSlider'

function App() {
  return (
    <>
      <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/nextevents' exact component={NextEvents} />
        <Route path='/suplementation' exact component={Suplementation} />
        <Route path='/events' exact component={Events} />
        <Route path='/sing-up' exact component={SignUp} />
        <Route path='/internacional' exact component={International} />
        <Route path='/national' exact component={National} />
        <Route path='/whowere' exact component={WhoWere} />
        <Route path='/Interview' exact component={Interview} />
      </Switch>
    </Router>


    </>
  );
}

export default App;
