import React, { FunctionComponent } from 'react';
import { Scope, useSaga } from 'react-clean-reactive-architecture';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { TodoNotificationSaga } from '../operations/todo/TodoNotificationSaga';
import { HomePage } from './pages/home/HomePage';
import { AboutPage } from './pages/about/AboutPage';

export const Application: FunctionComponent = () => {
  console.log('render application');
  useSaga(TodoNotificationSaga);

  return (
    <Router hashType='noslash'>
      <div className='container'>
        <Switch>
          <Route exact path='/' render={() => (
            <Scope context='some context'>
              <HomePage />
            </Scope>
          )}>
          </Route>
          <Route path='/about' render={() => (
            <Scope>
              <AboutPage />
            </Scope>
          )}>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
