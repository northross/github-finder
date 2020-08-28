import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './component/layout/Navbar';
import Users from './component/users/Users';
import User from './component/users/User';
import Search from './component/users/Search';

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
                <Route
                  exact
                  path='/'
                  render={(props) => (
                    <Fragment>
                      <Search />
                      <Users />
                    </Fragment>
                  )}
                />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
              </Switch>
            </div>
          </div>
        </AlertState>
      </GithubState>
    </Router>
  );
};

export default App;
