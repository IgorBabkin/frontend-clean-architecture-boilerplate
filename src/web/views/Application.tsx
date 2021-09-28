import React, { FunctionComponent, useEffect } from 'react';
import { useCommand, useSaga } from 'react-clean-use-case';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { LoadTodoList, TodoNotificationSaga } from '../../application';
import { HomePage } from './pages/home/HomePage';
import { AboutPage } from './pages/about/AboutPage';
import { Scope } from 'react-ts-ioc-container';

export const Application: FunctionComponent = () => {
  console.log('render application');
  useSaga(TodoNotificationSaga);
  const loadTodoList = useCommand(LoadTodoList);

  useEffect(() => {
    loadTodoList.execute();
  }, []);

  return (
    <Router hashType="noslash">
      <div className="container">
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
      </div>
    </Router>
  );
};
