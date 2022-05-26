import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import { React } from 'react';

import Navbar from './components/Navbar';
import Home from './components/pages/Navbar/Home'
import Products from './components/pages/Navbar/Products'
import Services from './components/pages/Navbar/Services'
import ContactUs from './components/pages/Navbar/ContactUs'
import SignUp from './components/pages/Navbar/SignUp'
import Marketing from './components/pages/Navbar/Marketing'
import Consulting from './components/pages/Navbar/Consulting'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' exact component={Services} />
        <Route path='/products' exact component={Products} />
        <Route path='/contact-us' exact component={ContactUs} />
        <Route path='/sing-up' exact component={SignUp} />
        <Route path='/marketing' exact component={Marketing} />
        <Route path='/consulting' exact component={Consulting} />
      </Switch>
    </Router>
  );
}

export default App;
