import React, { FunctionComponent, useEffect } from 'react';
import { Scope, useCommand, useSaga } from 'react-clean-reactive-architecture';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { TodoNotificationSaga } from '../application/operations/todo/TodoNotificationSaga';
import { HomePage } from './pages/home/HomePage';
import { AboutPage } from './pages/about/AboutPage';
import { LoadTodoList } from '../application/operations/todo/LoadTodoList';

export const Application: FunctionComponent = () => {
  console.log('render application');
  useSaga(TodoNotificationSaga);
  const loadTodoList = useCommand(LoadTodoList);

  useEffect(() => {
    loadTodoList.execute();
  }, []);

  return (
    <Router hashType='noslash'>
      <div className='container'>
        <Switch>
          <Route exact path='/' render={() => (
            <Scope context='Hello everyone'>
              <HomePage />
            </Scope>
          )}>
          </Route>
          <Route path='/about' render={() => (
            <Scope context='about us smth'>
              <AboutPage />
            </Scope>
          )}>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
