import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './component/layout/Navbar';
import Home from './component/pages/Home';
import User from './component/users/User';
import NotFound from './component/pages/NotFound';
import About from './component/pages/About';
import Alert from './component/layout/Alert';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App = () => {
  return (
    <Router>
      <GithubState>
        <AlertState>
          <div className='App'>
            <Navbar />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </AlertState>
      </GithubState>
    </Router>
  );
};

export default App;
