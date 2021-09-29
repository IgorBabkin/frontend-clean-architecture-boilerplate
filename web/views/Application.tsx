import React, { FunctionComponent, useEffect } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { LoadTodoList, TodoNotificationSaga } from '../../application';
import { HomePage } from './pages/home/HomePage';
import { AboutPage } from './pages/about/AboutPage';
import { Scope } from 'react-ts-ioc-container';
import { useCommand, useSaga } from '../core/react-clean-use-case/useCases';

export const Application: FunctionComponent = () => {
  console.log('render application');
  useSaga(TodoNotificationSaga);
  const loadTodoList = useCommand(LoadTodoList);

  useEffect(() => {
    loadTodoList.execute();
  }, []);

  return (
    <Router hashType="noslash">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Scope context="Hello everyone">
              <HomePage />
            </Scope>
          )}
        />
        <Route path="/about">
          <Scope context="about us smth">
            <AboutPage />
          </Scope>
        </Route>
      </Switch>
    </Router>
  );
};
