import React, { FunctionComponent } from 'react';
import { useSaga } from 'react-clean-reactive-architecture';
import { TodoNotificationSaga } from '../operations/todo/TodoNotificationSaga';
import { HomePage } from './pages/home/HomePage';

export const Application: FunctionComponent = () => {
  console.log('render application');
  useSaga(TodoNotificationSaga);

  return (
    <div className="container">
      <h3>Hey</h3>
      <HomePage />
    </div>
  );
};
